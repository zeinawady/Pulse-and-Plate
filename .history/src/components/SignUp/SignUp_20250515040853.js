import React from "react";
import "../../App";
import "./SignUp.css";
import "../../api/api";
import { Link , useNavigate } from "react-router-dom";
import { registerUser } from "../../api/api";
import { useFormik } from "formik";

export default function SignUp() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        await registerUser(values);
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
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-5 rounded shadow col-11 col-sm-10 col-md-8 col-lg-6 col-xl-5">
        <h2>Register</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              <strong>Username</strong>
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              placeholder="Enter Username"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </div>
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
          <button type="submit" className="btn btn-success w-100 rounded-0 mt-4">
            Register
          </button>

          <Link
            to="/login"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none mt-2"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}
