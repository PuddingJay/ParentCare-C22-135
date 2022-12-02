import React from 'react';
import './leftBar.scss';

const LeftBar = () => {
  return (
    <div className='leftBar'>
      <div className="container">
        <div className="menu">
          <div className="category">
            <h3>Category</h3>
          </div>
          <div className="item">
            <ul>
              <li>Semua</li>
              <li>Tantrum</li>
              <li>Tidak Patuh</li>
              <li>Berbohong</li>
              <li>Tertutup</li>
              <li>Sibling Rivalry</li>
              <li>Ketagihan Gadget</li>
              <li>Tidak Mau Belajar</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar;