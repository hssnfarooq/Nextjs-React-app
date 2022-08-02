import styles from '../../styles/Signup.module.css';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { EnjoyerSignUpProps, EnjoyerSignUpValues } from '../dataTypes/signupType';
import Link from 'next/link';


export default function EnjoyerSignupForm({ submitData }: EnjoyerSignUpProps) {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
    .required('name is required')
      .min(6, 'name must be at least 6 characters')
      .max(20, 'name must not exceed 20 characters'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    proNoun: Yup.string().required('pro noun is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    dob: Yup.string()
      .required('Date of Birth is required')
      .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Date of Birth must be a valid date in the format YYYY-MM-DD'),  
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnjoyerSignUpValues>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: EnjoyerSignUpValues) => {
    submitData(data);
  };
  return (
    <div className="register-form">
      <form onSubmit={handleSubmit(onSubmit)} className="register-form-content">
        <div className="form-field-content">
          <div className="form-group-signup">
            <label> Name</label>
            <input
              // name="username"
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
              className={`form-control-signup ${errors.dob ? 'is-invalid' : ''
                }`}
            />

            <div className="invalid-feedback">{errors.dob?.message}</div>
          </div>
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
        </div>
        <div className="form-group-signup form-check-signup" style={{ display: "flex", flexDirection: "row" }}>
          <input
            // name="acceptTerms"
            type="checkbox"
            {...register('acceptTerms')}
            className={`form-check-input-signup ${errors.acceptTerms ? 'is-invalid' : ''
              }`}
            style={{ width: 'auto', height: "auto" }}
          />
          <label htmlFor="acceptTerms" className="form-check-label" style={{ lineHeight: "12px" }}>
            I have read and agree to the
            <Link href="/terms&condition" passHref>
              <a target="_blank" rel="noopener noreferrer" style={{ color: "#d07765", textDecoration: "underline", paddingLeft: "2px" }}>
                Terms
              </a>
            </Link>
          </label>
          <div className="invalid-feedback">
            {errors.acceptTerms?.message}
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
