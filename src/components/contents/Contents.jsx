import React from "react";
import './contents.scss';
import AddContent from "../addContent/AddContent";
import { showFormattedDate } from "../../utils/data";
import { Link } from "react-router-dom";

const Contents = ({ name, filteredContent, content, setContent }) => {

  function onAddContentHandler({ title, body }) {
    setContent(() => {
      return [
        {
          id: +new Date(),
          createdAt: +new Date(),
          title,
          body
        },
        ...content
      ];
    });
  }

  return (
    <div className="contents">
      <AddContent addContent={onAddContentHandler} />
      {filteredContent.map((content) => (
        <div className="content" key={content.id}>
          <div className="user">
            <div className="user__info">
              <img
                src={`https://ui-avatars.com/api/?name=${content.name === undefined ? name : content.name
                  }&background=random`}
                alt="name avatar"
              />
              <div className="made">
                <span className="name">
                  {content.name === undefined ? name : content.name}
                </span>
                <span className="date">
                  Recently added at {showFormattedDate(content.createdAt)}
                </span>
              </div>
            </div>
          </div>
          <div className="body__content">
            <Link to={`/detail/${content.id}`}>
              <span>{content.title}</span>
              <span>{content.body}</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contents;
