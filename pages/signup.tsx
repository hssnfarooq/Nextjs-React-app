import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import EnjoyerSignupForm from "../app/components/enjoyers-signup-form";
import AdminLayout from "../app/components/Layout/adminLayout";
import ModalBox from "../app/components/modalBox";
import SignupForm from "../app/components/signup-form";
import userTypes from "../app/constants/userTypes";
import { CreatorSignUpProps, CreatorSignUpValues, EnjoyerSignUpValues } from "../app/dataTypes/signupType";
import { notify } from "../app/helper/Toast";
import { userService } from "../app/services";
import { timezone } from "../app/utils";
const Signup = () => {
  const router = useRouter();
  const [userType, setUserType] = useState<string|null>(null);
  const [isShown, setIsShown] = useState(false);
  useEffect(() => {
    // redirect to home if already logged in
    console.log('router.query.type',router.query.type)
    if (userService.userValue) {
      router.push('/');
    }
  }, []);
  useEffect(() => {
    if (router.query.type === userTypes.creator || router.query.type === userTypes.enjoyer){
      handleModal(router.query.type)
    }
  }, [router.query.type])
  
  const handleModal = (signupType:string) => {
    console.log("signupType", signupType)
    window.document.querySelector('body')?.classList.add('no-scroll');
    setUserType(signupType);
    setIsShown(true)
  }
  const handleCreatorForm = ({ username, email, password, name, idFile, dob, phone, proNoun }: CreatorSignUpValues) => {
    console.log('parent handler', { username, email, password, name, idFile, proNoun, dob, phone });
    idFile = idFile[0];
    let whiteListForm = { username, email, password, name, idFile, proNoun, dob, phone, timezone: timezone, type: userTypes.creator}
    var formData = new FormData();
    formData.append('displayName', username)
    formData.append('email', email)
    formData.append('password', password)
    formData.append('name', name)
    formData.append('dob', dob)
    formData.append('pronoun', proNoun)
    formData.append('phone', phone)
    formData.append('timezone', timezone)
    formData.append('type', userTypes.creator)
    formData.append("idFile", idFile);
    return userService
      .signUp(formData)
      .then(() => {
        const returnUrl = '/';
        notify("success", "you have been registered successfully")
        router.push(returnUrl);
      })
      .catch(error => {
        // setError('apiError', { message: error });
        const { response } = error;
        notify("error", response.data.message)

      }); 
  }
  const handleEnjoyersForm = ({ name, email, password, proNoun, dob }: EnjoyerSignUpValues) => {
    console.log("first",name)
    console.log('parent handler', { name, email, password, proNoun, dob });
    // idFile = idFile[0];
    // let whiteListForm = { username, email, password, name, idFile, dob, phone, timezone: timezone, type: userTypes.creator}
    var formData = new FormData();
    formData.append('name', name)
    formData.append('email', email)
    formData.append('password', password)
    formData.append('dob', dob)
    formData.append('pronoun', proNoun)
    formData.append('timezone', timezone)
    formData.append('type', userTypes.enjoyer)
    // formData.append('phone', phone)
    // formData.append('name', name)
    // formData.append("idFile", idFile);
    return userService
      .signUpEnjoyer(formData)
      .then(() => {
        // get return url from query parameters or default to '/'
        // const returnUrl = router.query.returnUrl as string || '/';
        const returnUrl = '/';
        notify("success", "you have been registered successfully")
        router.push(returnUrl);
        // const { response } = error;

      })
      .catch(error => {
        const { response } = error;
        notify("error", response.data.message)

      }); 
  }
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Euphoria - Signup</title>
      </Head>
      <section className="about-euphoria">
        <div className="container">
          <h1 className="about-euphoria-title">Sign Up</h1>
          <div className="about-euphoria-content">
            <div className="dotted-border"></div>
            <div className="signup-tile-div">
              <span onClick={() =>handleModal(userTypes.creator)} className="badge signup-pill">Creators</span>
              <span onClick={() => handleModal(userTypes.enjoyer)} className="badge signup-pill">Enjoyers</span>
              <span  className="badge signup-pill">Contact</span>
            </div>
          </div>
        </div>

        <ModalBox isShown={isShown} setIsShown={setIsShown} child={userType === userTypes.creator ? <SignupForm submitData={handleCreatorForm} /> : <EnjoyerSignupForm submitData={handleEnjoyersForm} />}/>
      </section>
    </>
  );
}
Signup.getLayout = function getLayout(page: ReactElement) {
  return (
    <AdminLayout>
      {page}
    </AdminLayout>
  )
}
export default Signup;
