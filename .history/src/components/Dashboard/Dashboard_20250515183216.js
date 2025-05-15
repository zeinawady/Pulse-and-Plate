import React from "react";
import "../../App";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="main-container container">
      <h2 className="text-center p-5">dashboard</h2>
      <div className="row g-4 mb-4">
        <div className="col-md-3 col-sm-6">
          <div className="card text-white bg-secondary h-100">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
