import React from 'react';
import './navBar.scss';
import { Link } from 'react-router-dom';
import { FaMoon/*, FaSun*/ } from 'react-icons/fa';
import { FiHome, FiLogOut } from 'react-icons/fi';
import { CgSearch } from 'react-icons/cg';
import { BsPersonCircle } from 'react-icons/bs';

const NavBar = ({ logout }) => {
  return (
    <div className="navBar">

      <Link to='/' style={{ textDecoration: 'none' }}>
        <span className="appName">parentcare</span>
      </Link>
      <FiHome />
      <FaMoon />
      <div className="search">
        <CgSearch />
        <input type="text" placeholder="Search" />
      </div>

      <div className="user">
        <BsPersonCircle />
        <span>Windu</span>
      </div>

      <button className='logoutButton' onClick={logout}><FiLogOut /><span>Keluar</span></button>

    </div>
  )
}

export default NavBar;