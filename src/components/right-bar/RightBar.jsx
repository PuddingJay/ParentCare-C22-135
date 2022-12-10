import React from 'react';
import './rightBar.scss';
import img1 from '../../asset/mtwae.jpg';
import { getDataArticle } from '../../utils/data-article';


const RightBar = () => {

  const dataArticle = getDataArticle();

  return (
    <div className="list">
      <p>Berikut List Artikel untuk membantu</p>
      <div className="rightBar">
        <div className="article__container">
          {dataArticle.map((article) => (
            <a href={article.link} className="article">
              <img src={img1} alt="article" />
              <span>{article.article}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RightBar;