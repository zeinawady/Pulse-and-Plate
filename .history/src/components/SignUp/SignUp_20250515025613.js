import React, { useState } from "react";
import "../../App";
import "./SignUp.css";
import "../../api/api";
import { fetchAllUsers } from "../../api/api";
import { Link } from "react-router-dom";
import axios from "axios";
import { registerUser } from "../../api/api";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     axios
//       .post(URL, {
//         name,
//         email,
//         password,
//       })
//       .then((res) => {
//         console.log(res);
//         alert("Registration successful!");
//         setName("");
//         setEmail("");
//         setPassword("");
//       })
//       .catch((err) => {
//         console.error(err);
//         alert("Failed to register. Please try again.");
//       });
//   };
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ name, email, password });
      alert("Registration successful!");
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);
      alert("Failed to register. Please try again.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-5 rounded shadow col-11 col-sm-10 col-md-8 col-lg-6 col-xl-5">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 ">
            <label htmlFor="username" className="form-label">
              <strong>Username</strong>
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              placeholder="Enter Username"
              name="username"
              onChange={(e) => setName(e.target.value)}
            />
            <div></div>
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-success w-100 rounded-0 mt-4"
          >
            Register
          </button>

          <p>Already Have an Account</p>
          <Link
            to="/login"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}
