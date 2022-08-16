import * as yup from "yup";

export const LoginForm = yup.object().shape({
  email: yup
    .string()
    .email("Email is not valid")
    .required("Email is required")
    .email("Email is invalid"),
  password: yup.string().required("Password is required"),
  //username: yup.string().required('Username is required'),
  // passwordConfirmation: yup
  //   .string()
  //   .required('Password confirmation is required')
  //   .oneOf([yup.ref('password'), null], 'Passwords must match'),
});
