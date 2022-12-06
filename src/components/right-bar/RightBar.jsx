import React from 'react';
import './rightBar.scss';
import img1 from '../../asset/mtwae.jpg';


const RightBar = () => {
  return (
    <div className="list">
      <p>Berikut List Artikel untuk membantu</p>
      <div className="rightBar">
        <div className="article__container">
          <a href="https://www.youtube.com/watch?v=FweHcYHkt9A" className="article">
            <img src={img1} alt="article" />
            <h3>Judul Artikel</h3>
          </a>
          <a href="https://www.youtube.com/watch?v=FweHcYHkt9A" className="article">
            <img src={img1} alt="article" />
            <h3>Judul Artikel</h3>
          </a>
          <a href="https://www.youtube.com/watch?v=FweHcYHkt9A" className="article">
            <img src={img1} alt="article" />
            <h3>Judul Artikel</h3>
          </a>
          <a href="https://www.youtube.com/watch?v=FweHcYHkt9A" className="article">
            <img src={img1} alt="article" />
            <h3>Judul Artikel</h3>
          </a>
          <a href="https://www.youtube.com/watch?v=FweHcYHkt9A" className="article">
            <img src={img1} alt="article" />
            <h3>Judul Artikel</h3>
          </a>
          <a href="https://www.youtube.com/watch?v=FweHcYHkt9A" className="article">
            <img src={img1} alt="article" />
            <h3>Judul Artikel</h3>
          </a>
          <a href="https://www.youtube.com/watch?v=FweHcYHkt9A" className="article">
            <img src={img1} alt="article" />
            <h3>Judul Artikel</h3>
          </a>
        </div>
      </div>
    </div>
  )
}

export default RightBar;