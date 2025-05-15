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
        <div></div>

        </div>
    )
}