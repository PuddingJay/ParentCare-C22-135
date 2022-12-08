import React from "react";
import "./navBar.scss";
import { Link } from "react-router-dom";
import { FaMoon /*, FaSun*/ } from "react-icons/fa";
import { FiHome, FiLogOut } from "react-icons/fi";
import { CgSearch } from "react-icons/cg";

const NavBar = ({ logout, name }) => {
  return (
    <div className="navBar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <span className="appName">parentcare</span>
      </Link>
      <FiHome />
      <FaMoon />
      <div className="search">
        <CgSearch />
        <input type="text" placeholder="Search" />
      </div>

      <div className="user">
        <img
          src={`https://ui-avatars.com/api/?name=${name === undefined ? name : name
            }&background=random`}
          alt="name avatar"
        />
        <span>{name}</span>
      </div>

      <button className="logoutButton" onClick={logout}>
        <FiLogOut />
        <span>Keluar</span>
      </button>
    </div>
  );
};

export default NavBar;
