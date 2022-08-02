import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router'
// import { decryptData, encryptData } from '../utils/encryptStorage'
import RestClient, { GET, POST } from '../api/RestClient';
import { timezone } from '../utils';
import { alertService } from './alert.service';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `http://localhost:9004/v1`;
// const baseUrl = `https://dev-api.eavii.com/v1`;
let userInfo = null
if (typeof window !== "undefined") {
    console.log('localStorage.getItem("user")', localStorage.getItem("user"));
  userInfo = localStorage.getItem("user") ? JSON.parse(localStorage.getItem('user')) : null
}
// console.log("encryptStorage", encryptStorage);
const userSubject = new BehaviorSubject(process.browser && userInfo);

export const userService = {
    user: userSubject.asObservable(),
    get userValue () { return userSubject.value },
    login,
    logout,
    signUp,
    signUpEnjoyer,
    getAll
};

function login(email, password) {
    
    return RestClient.POST(`${baseUrl}/users/login`, { email, password, timezone }).then(
      (user) => {
          console.log("resp", user.data.data)
        // publish user to subscribers and store in local storage to stay logged in between page refreshes
        userSubject.next(user.data.data.user);
        localStorage.setItem("user", JSON.stringify(user.data.data.user));
        localStorage.setItem("token", JSON.stringify(user.data.data.tokens.token));
        userSubject.next(user.data.data.user);

        return user;
      })
      // .catch((err) => {
      //   console.log(":err", err.data);
      //   //TODO: handle errors here
      //   alertService.error(err.message)
      // });
}
function signUp(data) {
    return RestClient.POST(`${baseUrl}/users`, data, {
      "Content-Type": "multipart/form-data",
    })
      .then((user) => {
        console.log("resp", user);
        return user;
      })
      .catch((err) => console.log(err.message));
}
function signUpEnjoyer(data) {
    return RestClient.POST(`${baseUrl}/users`, data)
      .then((user) => {
        console.log("resp", user);
        return user;
      })
      .catch((err) => console.log(err.message));
}

function logout() {
    // remove user from local storage, publish null to user subscribers and redirect to login page
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    userSubject.next(null);
    Router.push('/');
}

function getAll(limit, offset) {
    return RestClient.GET(
      `${baseUrl}/users?limit=${limit}&offset=${offset}&sort=-createdAt`,
      true
    );
}
