import React, { useContext } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
export default function Layout() {
  let { userData, setUserData } = useContext(AuthContext);
  let navigate = useNavigate();
  function logout() {
    localStorage.removeItem("user token");
    setUserData(null);
    navigate("/login");
  }
  return (
    <>
      <Navbar logout={logout} userData={userData} />
      <div className="container">
        <Outlet></Outlet>
      </div>
      <Footer userData={userData} />
    </>
  );
}
