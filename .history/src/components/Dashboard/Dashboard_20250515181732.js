import React from 'react'
import "../../App";
import SignUp from '../SignUp/SignUp';

export default function SignUp() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Please confirm your password"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await registerUser({
          name: values.name,
          email: values.email,
          password: values.password,
        });
        alert("Registration successful!");
        resetForm();
        navigate("/login");
      } catch (error) {
        console.error(error);
        alert("Failed to register. Please try again.");
      }
    },
  });

  return (
=
  );
}
