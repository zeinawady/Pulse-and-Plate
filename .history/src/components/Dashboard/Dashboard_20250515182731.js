import React from "react";
import "../../App";
import "./Dashboard.css";
import SignUp from "../SignUp/SignUp";

export default function Dashboard() {
 
  return (

      <div className="d-flex justify-content-center align-items-center bg-secondary main-container">
        <SignUp></SignUp>
     <h2 >dashboard</h2>
      
    </div>
  );
}
