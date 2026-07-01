import React from "react";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="container" style={{ maxWidth: 600 }}>
      <h2>Dashboard</h2>
      <p>This page is only visible to authenticated users.</p>
      <ul>
        <li>
          <strong>Name:</strong> {user?.name}
        </li>
        <li>
          <strong>Email:</strong> {user?.email}
        </li>
        <li>
          <strong>Role:</strong> {user?.role}
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
