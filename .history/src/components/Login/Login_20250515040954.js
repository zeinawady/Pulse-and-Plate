import React from "react";
import "../../App";
import "./Login.css";
import "../../api/api";
import { loginUser } from "../../api/api";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";


export default function Login() {
   const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await loginUser(values);
        alert("Login successful!");
        resetForm();
        
      } catch (error) {
        console.error(error.message);
        alert("Failed to login. Please try again.");
      }
    },
  });

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-5 rounded shadow col-11 col-sm-10 col-md-8 col-lg-6 col-xl-5">
        <h2>Login</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              className="form-control rounded-0"
              placeholder="Enter Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              className="form-control rounded-0"
              placeholder="Enter Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-success w-100 rounded-0 mt-4"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
