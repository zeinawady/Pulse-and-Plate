import React, { useState } from "react";
import "../../App";
import "./Registration.css";
import "../../api/api";
import { fetchAllUsers } from "../../api/api";




export default function Registration() {

    // const [users, setUsers] = useState([]);
    // const [error, setError] = useState('');

    // useEffect(() => {
    //     async function loadUsers() {
    //         try {
    //             const data = await fetchAllUsers();
    //             setUsers(data);
    //         } catch (err) {
    //             setError('Failed to fetch users');
    //             console.error(err);
    //         }
    //     }

    //     loadUsers();
    // }, []);

    // console.log(users)
    // let allUsers = fetchAllUsers()

    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-4 rounded w-50 ">
            <h2>Register</h2>
            <form >
                <div className="mb-3 custom-width">
                    <label htmlFor="username" className="form-label"><strong>Username</strong></label>
                    <input type="text" className="form-control rounded-0" placeholder="Enter Username" name="username"/>
                    <div>
                    </div>
                </div>
                <div className="mb-3 custom-width">
                    <label htmlFor="email" className="form-label"><strong>Email</strong></label>
                    <input type="email" className="form-control rounded-0" placeholder="Enter Email" name="email"/>
                </div>
                <div className="mb-3 custom-width">
                    <label htmlFor="password" className="form-label"><strong>Password</strong></label>
                    <input type="password" className="form-control rounded-0" placeholder="Enter Password" name="password"/>
                </div>
                <button type="submit" className="btn btn-success w-100 rounded-0 custom-width">Register</button>
            
            <p>Already Have an Account</p>
            <button className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none custom-width">Login</button>
            </form>


        </div>

        </div>
    )
}