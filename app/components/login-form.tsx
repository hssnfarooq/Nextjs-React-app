import { Formik, Field, Form, FormikHelpers } from 'formik';
import { Router, useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from '../../styles/Login.module.css';
import { userService } from '../services';
import { useForm } from 'react-hook-form';
import silentImg from '../images/silent-euphoria-logo.png';
import Link from 'next/link';
import { notify } from '../helper/Toast';
interface Values {
  email: string;
  password: string;
}
export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Values>();

  useEffect(() => {
    // redirect to home if already logged in
    if (userService.userValue) {
      router.push('/');
    }
  }, []);
  function onSubmit({ email, password }: Values) {
    // console.log("submit data", data)
    return userService
      .login(email, password)
      .then(() => {
        // get return url from query parameters or default to '/'
        if (router.query.returnUrl) {
        }
        notify("success", "user logged in successfully")

        const returnUrl = (router.query.returnUrl as string) || '/';
        router.push(returnUrl);
      })
      .catch(error => {
        const {response} = error;
        notify("error", response.data.message)
        
      });
  }
  return (
    <div id="myNav" className="overlay">
      <img src={silentImg.src} alt="" className="silent-btm-logo" />
      <div className="menu-modal-content">
        <div className="menu-modal-left"></div>
        <div className="menu-modal-right">
          {/* <div className="close-icon">
            <img onClick={closeModal} src={closeIcon.src} alt="" />
          </div> */}
          <div className="menu-modal-header-links">
            <span className="signup-link">Sign In</span>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="login-form-content"
          >
            <div className="form-group-signup">
              <label>Email</label>
              <input
                type={'email'}
                {...register('email', { required: true })}
                className={`form-control-signup ${
                  errors.email ? 'is-invalid' : ''
                }`}
                // value="johnep@mailinator.com"
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>
            <div className="form-group-signup">
              <label>Password</label>
              <input
                {...register('password', { required: true })}
                className={`form-control-signup ${
                  errors.password ? 'is-invalid' : ''
                }`}
                // value="Test123$"
              />
              <div className="invalid-feedback">{errors.password?.message}</div>
            </div>
            <div className="forgot-pass-link">
              <Link href="#">Forgot Password?</Link>
            </div>

            {/* <input {...register('age', { pattern: /\d+/ })} />
                {errors.age && <p>Please enter number for age.</p>} */}
            <button type="submit" className="btn-signin-form" >
              Let&apos;s Go
              <span className="signin-arrow"> &#8594;</span>
            </button>
          </form>
        </div>
      </div>
    </div>
    // <div className={styles.login_box + ' p-3'}>
    //     <h1 className="display-6 mb-3">Login</h1>
    //     <form onSubmit={handleSubmit(onSubmit)}>
    //         <input type={"email"}
    //         {...register('email', { required: true })}
    //             value="johnep@mailinator.com"
    //          />
    //         {errors.email && <p>user name is required.</p>}
    //         <input {...register('password', { required: true })}
    //             value="Test123$" />
    //         {errors.password && <p>password is required.</p>}
    //         {/* <input {...register('age', { pattern: /\d+/ })} />
    //         {errors.age && <p>Please enter number for age.</p>} */}
    //         <input type="submit" className='btn btn-success'/>
    //     </form>
    // </div>
  );
}
