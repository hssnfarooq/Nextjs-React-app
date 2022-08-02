import styles from '../../styles/Signup.module.css';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import "yup-phone";
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { userService } from '../services';
import { useRouter } from 'next/router';
import { CreatorSignUpProps, CreatorSignUpValues } from '../dataTypes/signupType';
import Link from 'next/link';

export default function SignupForm({ submitData }: CreatorSignUpProps) {
  const [image, setImage] = useState<File | null>(null);
  const [createObjectURL, setCreateObjectURL] = useState('');
  const validationSchema = Yup.object().shape({
    username: Yup.string()
    .required('Username is required')
    .min(6, 'Username must be at least 6 characters')
    .max(20, 'Username must not exceed 20 characters'),
    name: Yup.string().required('Legal Name is required'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    proNoun: Yup.string().required('pro noun is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    idFile: Yup.mixed().test(
      'required',
      'You need to provide a file',
      value => {
        // console.log('value', value);
        return value && value.length;
        // })
        // .test("fileSize", "The file is too large", (value, context) => {
        //     return value && value[0] && value[0].size <= 200000;
        // })
        // .test("type", "We only support jpeg", function (value) {
        //     return value && value[0] && value[0].type === "image/jpeg";
      }
    ),
    dob: Yup.string()
        .required('Date of Birth is required')
        .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Date of Birth must be a valid date in the format YYYY-MM-DD'),
    // minDate: Yup
    //     .date()
    //     .nullable()
    //     .transform((curr, orig) => (orig === "" ? null : curr))
    //     .required("Date is required")
    //     .min(new Date(), "The date should be greater than today") as any,
    phone: Yup.string()
          .phone('US', true, '${path} is invalid')
          .required("phone number is required"),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
  });
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatorSignUpValues>({
    resolver: yupResolver(validationSchema),
  });
  // useEffect(() => {
  //     // redirect to home if already logged in
  //     if (userService.userValue) {
  //         router.push('/');
  //     }

  // }, []);

  const uploadToClient = (event: { target: HTMLInputElement }) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      // setCreateObjectURL(URL.createObjectURL(i));
      // console.log("URL.createObjectURL(i)", ima)
    }
  };

    const onSubmit = (data: CreatorSignUpValues) => {
    // if (data.idFile.length > 0) {
    //   console.log('======>', data.idFile);
    //   //upload image here
    // }
    console.log(data);
    // data.idFile = data.idFile[0];
    submitData(data);
    
  };
  return (
    <div className="register-form">
      <form onSubmit={handleSubmit(onSubmit)} className="register-form-content">
        <div className="form-field-content">
          <div className="form-group-signup">
            <label>Creator Name</label>
            <input
              // name="username"
              type="text"
              {...register('username')}
              className={`form-control-signup ${
                errors.username ? 'is-invalid' : ''
              }`}
            />
            <div className="invalid-feedback">{errors.username?.message}</div>
          </div>
          <div className="form-group-signup">
            <label>Legal Name</label>
            <input
              // name="fullname"
              type="text"
              {...register('name')}
              className={`form-control-signup ${
                errors.name ? 'is-invalid' : ''
              }`}
            />
            <div className="invalid-feedback">{errors.name?.message}</div>
          </div>

          <div className="form-group-signup">
            <label>Email</label>
            <input
              // name="email"
              type="email"
              {...register('email')}
              className={`form-control-signup ${
                errors.email ? 'is-invalid' : ''
              }`}
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </div>

          <div className="form-group-signup">
            <label>Preferred Pronoun</label>
            <input
              // name="proNoun"
              type="text"
              {...register('proNoun')}
              className={`form-control-signup ${
                errors.proNoun ? 'is-invalid' : ''
              }`}
            />
            <div className="invalid-feedback">{errors.proNoun?.message}</div>
          </div>
          <div className="form-group-signup">
            <label>DOB</label>
            <input
              // name="proNoun"
            type="date"
              {...register('dob')}
              className={`form-control-signup ${
                errors.dob ? 'is-invalid' : ''
              }`}
            />
                      
            <div className="invalid-feedback">{errors.dob?.message}</div>
          </div>
          <div className="form-group-signup">
            <label>Phone</label>
            <input
              // name="proNoun"
            type="string"
              {...register('phone')}
              className={`form-control-signup ${
                errors.phone ? 'is-invalid' : ''
              }`}
            />
                      
            <div className="invalid-feedback">{errors.phone?.message}</div>
          </div>

          <div className="form-group-signup">
            <div className="upload-btn-wrapper">
              <button className="btn-upload-id">Upload ID</button>
              <input
                id="idFile"
                {...register('idFile')}
                className={`form-control-signup ${
                  errors.idFile ? 'is-invalid' : ''
                }`}
                type="file"
                name="idFile"
              />
            </div>
          </div>
          {/* // ) : "Hello" } */}
          {/* <div className="invalid-feedback">{errors.idFile?.message}</div> */}
          {errors.idFile && <p>{errors.idFile.message}</p>}
          <div className="form-group-signup">
            <label>Password</label>
            <input
              // name="password"
              type="password"
              {...register('password')}
              className={`form-control-signup ${
                errors.password ? 'is-invalid' : ''
              }`}
            />
            <div className="invalid-feedback">{errors.password?.message}</div>
          </div>

          <div className="form-group-signup">
            <label>Confirm Password</label>
            <input
              // name="confirmPassword"
              type="password"
              {...register('confirmPassword')}
              className={`form-control-signup ${
                errors.confirmPassword ? 'is-invalid' : ''
              }`}
            />
            <div className="invalid-feedback">
              {errors.confirmPassword?.message}
            </div>
          </div>
          <div className="form-group-signup form-check-signup" style={{display:"flex", flexDirection:"row"}}>
            <input
              // name="acceptTerms"
              type="checkbox"
              {...register('acceptTerms')}
              className={`form-check-input-signup ${
                errors.acceptTerms ? 'is-invalid' : ''
              }`}
              style={{width:'auto', height:"auto"}}
            />
            <label htmlFor="acceptTerms" className="form-check-label" style={{lineHeight: "12px"}}>
              I have read and agree to the  
              <Link href="/terms&condition" passHref>
                <a target="_blank" rel="noopener noreferrer" style={{ color:"#d07765", textDecoration: "underline", paddingLeft:"2px" }}>
                  Terms
                </a>
              </Link>
            </label>
            <div className="invalid-feedback">
              {errors.acceptTerms?.message}
            </div>
          </div>
        </div>

        <button type="submit" className="btn-signup-form">
          Sign Up
          <span className="signup-arrow"> &#8594;</span>
        </button>
      </form>
    </div>
  );
}
