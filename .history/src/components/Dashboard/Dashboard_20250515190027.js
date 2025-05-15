import React from "react";
import "../../App";
import "./Dashboard.css";
import { BsFillArchiveFill ,BsPeopleFill , BsGrid} from "react-icons/bs";
export default function Dashboard() {
  return (
    <div className="main-container container">
      <h2 className="py-5">DASHBOARD</h2>

      <div className="row mb-4 ">
        <div className="col-md-3 col-sm-6">
          <div className="card text-white bg-danger h-100">
            <div className="card-body">
              <div className="card-inner">
                <div className="card-title d-flex justify-content-between">
                  <h3>Orders</h3>
                  <h3 className="card_icon ">
                    <BsFillArchiveFill />
                  </h3>
                </div>
                <p className="fs-2">30</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="card text-white bg-success h-100">
            <div className="card-body">
              <div className="card-inner">
                <div className="card-title d-flex justify-content-between">
                  <h3>Users</h3>
                  <h3 className="card_icon ">
                    <BsPeopleFill />
                  </h3>
                </div>
                <p className="fs-2">30</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="card text-white bg-success h-100">
            <div className="card-body">
              <div className="card-inner">
                <div className="card-title d-flex justify-content-between">
                  <h3>Menu Items</h3>
                  <h3 className="card_icon ">
                    <BsGrid />
                  </h3>
                </div>
                <p className="fs-2">30</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
