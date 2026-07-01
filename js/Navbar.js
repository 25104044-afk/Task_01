import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="navbar">
      <Link to="/" style={{ color: "#fff", fontWeight: "bold" }}>
        Secure Auth
      </Link>
      <div>
        {user ? (
          <>
            <span style={{ marginRight: 16 }}>Hi, {user.name}</span>
            <button style={{ width: "auto", padding: "6px 14px" }} onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ color: "#fff", marginRight: 16 }}>
              Login
            </Link>
            <Link to="/register" style={{ color: "#fff" }}>
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
