import React from "react";
import "../../App";
import "./Dashboard.css";
import { BsFillArchiveFill } from "react-icons/bs";
export default function Dashboard() {
  return (
    <div className="main-container container">
      <h2 className="text-center p-5">DASHBOARD</h2>

      <div className="row g-4 mb-4">
        
        <div className="col-md-3 col-sm-6">
          <div className="card text-white bg-secondary h-100">
            <div className="card-body">
              <div className="card-inner">
                <h3 className="card-title">
                  Orders
                  <span className="card_icon px-5">
                    <BsFillArchiveFill />
                  </span>
                </h3>
                dummy number
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="card text-white bg-secondary h-100">
            <div className="card-body">
              <h5 className="card-title">Users</h5>
              <p className="card-text">dummy number</p>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="card text-white bg-secondary h-100">
            <div className="card-body">
              <h5 className="card-title">Menu Items</h5>
              <p className="card-text">dummy number</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
