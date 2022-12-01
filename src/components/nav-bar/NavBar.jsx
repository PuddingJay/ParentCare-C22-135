import React from 'react';
import './navBar.scss';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import { FiHome } from 'react-icons/fi';
import { CgSearch } from 'react-icons/cg';
import { BsPersonCircle } from 'react-icons/bs';

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="left">
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span>ParentCare</span>
        </Link>
        <FiHome />
        <FaMoon />
        <div className="search">
          <CgSearch />
          <input type="text" placeholder="Search" />
        </div>

      </div>
      <div className="right">
        <BsPersonCircle />
        <div className="user">
          <span>Windu</span>
        </div>
      </div>
    </div>
  )
}

export default NavBar;