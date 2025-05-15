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
  ResponsiveContainer,
} from "recharts";
import { fetchAllUsers } from "../../api/UsersAPI";

export default function Dashboard() {
  const [usersCount, setUsersCount] = useState(0);
  const [registerDate, setRegisterDate] = useState([]);
  const [orders, setOrders] = useState([]);


  useEffect(() => {

    fetchAllUsers().then((users) => {
      setOrders(Array.isArray(users) );
      setUsersCount(Array.isArray(users) ? users.length : 0);
    
    });
  });

  //get all users and group them by similar dates
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
    return Object.entries(countsPerDate)
      .map(([date, count]) => ({ date, count }))
      .sort((a, b) => new Date(a.date) - new Date(b.date)); //sort by date
  }

  return (
    <div className="container">
    <div className="py-4 dashboardContainer" >
      <h2 className="pb-3">DASHBOARD</h2>
      <div className="row mb-4 ">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
          <div className="card text-white bg-danger ">
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

        <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
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

        <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
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
      <div className="row">

        <div className="col-12 col-md-8 col-lg-6 mb-4">
          <h3 className="pb-3">User Registrations Over Time</h3>
          <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <LineChart data={registerDate}>
              <XAxis dataKey="date" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <Line type="monotone" dataKey="count" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        </div>


      </div>
    
    </div>
    </div>
  );
}
