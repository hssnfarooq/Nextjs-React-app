import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
// import { encryptStorage } from "../utils/encryptStorage";

axios.defaults.headers.common.Accept = "application/json";
axios.defaults.timeout = 12000;
// axios.interceptors.response.use(null, (error) => {
    
//     return Promise.reject(error);
// });
const getHttpHeaders = (isAuthenticated = false): AxiosRequestConfig => {
  // Add your custom logic here, for example add a Token to the Headers
  document.body.classList.add("loading-indicator");
  if (isAuthenticated) {
    const token = JSON.parse(localStorage.getItem("token")!);
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }

  return {};
};

axios.interceptors.response.use(
  function (response) {
    // spinning hide
    // UPDATE: Add this code to hide global loading indicator
    document.body.classList.remove("loading-indicator");

    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const GET = (path: string, Authorized=false): Promise<AxiosResponse> =>
  axios.get(path, getHttpHeaders(Authorized));

const DEL = (path: string): Promise<AxiosResponse> =>
  axios.delete(path, getHttpHeaders());

const POST = (path: string, data: any, additionalHeaders: any): Promise<AxiosResponse> =>{
  let header = getHttpHeaders();
  header = { ...header, headers:{...header.headers, ...additionalHeaders} }
// console.log(header);
  return axios.post(path, data, header);
}

const PUT = (path: string, data: any): Promise<AxiosResponse> =>
  axios.post(path, data, getHttpHeaders());

const PATCH = (path: string, data: any): Promise<AxiosResponse> =>
  axios.post(path, data, getHttpHeaders());

export default {
  GET,
  DEL,
  POST,
  PUT,
  PATCH,
};
