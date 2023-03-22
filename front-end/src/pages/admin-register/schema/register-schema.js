import * as yup from "yup";

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is a required field"),
  name: yup.string().required("Name is a required field"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 length")
    .required("Password is a required field"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
