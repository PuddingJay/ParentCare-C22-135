import React from "react";
import "./rightBar.scss";
import { getDataArticle } from "../../utils/data-article";
import artikels from "../../asset/image";

const RightBar = () => {
  const dataArticle = getDataArticle();

  return (
    <div className="list">
      <p>Berikut List Artikel untuk membantu</p>
      <div className="rightBar">
        <div className="article__container">
          {dataArticle.map((article, index) => (
            <a
              href={article.link}
              className="article"
              target="_blank"
              rel="noreferrer"
            >
              <img src={artikels[index]} alt="article" />
              <span>{article.article}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightBar;
