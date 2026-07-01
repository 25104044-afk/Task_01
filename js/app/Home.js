import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="container" style={{ textAlign: "center" }}>
    <h2>Secure User Authentication System</h2>
    <p>Task-01 — Prodigy InfoTech Internship</p>
    <div className="link-row">
      <Link to="/login">Login</Link> &nbsp;|&nbsp; <Link to="/register">Register</Link>
    </div>
  </div>
);

export default Home;
