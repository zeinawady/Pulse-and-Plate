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
        <div className="bg-white p-3 rounded w-25">
            <h2>Register</h2>
            <form >
                <div className="mb-3">
                    <label htmlFor="username" className="form-label"><strong>Username</strong></label>
                    <input type="text" className="form-control rounded-0" placeholder="Enter username" name="username"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>

        </div>
    )
}