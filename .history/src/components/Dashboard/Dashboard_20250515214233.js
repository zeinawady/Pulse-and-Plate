import { useEffect, useState } from "react";
import "../../App";
import "./Dashboard.css";
import { BsFillArchiveFill, BsPeopleFill, BsGrid } from "react-icons/bs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { fetchAllUsers } from "../../api/UsersAPI";

export default function Dashboard() {
  const [usersCount, setUsersCount] = useState(0);
  const [registerDate, setRegisterDate] = useState([]);
  useEffect(() => {
    fetchAllUsers().then((users) => {
      setUsersCount(Array.isArray(users) ? users.length : 0);
    });
  });

  //get all users 
  useEffect(() => {
    fetchAllUsers().then((users) => {
      const allDates = groupUsersByDate(users);
      setRegisterDate(allDates);
    });
  });

  //how many users registered on each date
  //returns a list sorted by date
  function groupUsersByDate(users) {
    const countsPerDate = {};

    users.forEach((user) => {
      const date = user.registeredAt.slice(0, 10); //Take only the "YYYY-MM-DD" part
      countsPerDate[date] = (countsPerDate[date] || 0) + 1;
    });
    return Object.entries(countsPerDate).map(([date, count]) =>
      ({
        date,
        count,
      } //return object of date and count
      .sort((a, b) => new Date(a.date) - new Date(b.date))) //sort by date
    );
  }

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
          <div className="card text-white bg-primary h-100">
            <div className="card-body">
              <div className="card-inner">
                <div className="card-title d-flex justify-content-between">
                  <h3>Users</h3>
                  <h3 className="card_icon ">
                    <BsPeopleFill />
                  </h3>
                </div>
                <p className="fs-2">{usersCount}</p>
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
