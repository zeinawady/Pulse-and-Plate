import React from "react";
import "../../App";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../api/UsersAPI";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Dashboard() {
 
 
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary main-container">
      <div className="bg-white p-5 rounded shadow col-11 col-sm-10 col-md-8 col-lg-6 col-xl-5">
        <h2>Register</h2>
       -control rounded-0"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && <div className="text-danger">{formik.errors.confirmPassword}</div>}
          </div>

          <button type="submit" className="btn btn-success w-100 rounded-0 mt-4">Register</button>

          <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none mt-2">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}
