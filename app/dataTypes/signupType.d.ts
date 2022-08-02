export interface CreatorSignUpValues {
  username: string;
  name: string;
  email: string;
  proNoun: string;
  idFile: any;
  password: string;
  confirmPassword: string;
  dob: string;
  phone: string;
  acceptTerms: boolean;
}
export interface CreatorSignUpProps {
  submitData: Function;
}

interface EnjoyerSignUpValues {
  name: string;
  email: string;
  proNoun: string;
  password: string;
  confirmPassword: string;
  dob: string;
  acceptTerms: boolean;
  
}

export interface EnjoyerSignUpProps {
  submitData: Function;
}