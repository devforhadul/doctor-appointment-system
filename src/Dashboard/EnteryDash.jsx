import axios from "axios";
import React, { useEffect, useState } from "react";

const EnteryDash = () => {
  const [appintment, setAppointment] = useState(0);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_S_URL}/appointment`)
      .then((res) => setAppointment(res.data));
  }, []);

  return (
    <div>
      <div className="stats stats-vertical lg:stats-horizontal shadow">
        <div className="stat">
          <div className="stat-title">Total Appointment</div>
          <div className="stat-value">{appintment.length}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-title">Total Doctor</div>
          <div className="stat-value">20</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-title">Total User</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default EnteryDash;
