import React from "react";
import "./contents.scss";
import AddContent from "../addContent/AddContent";
import { getData, showFormattedDate } from "../../utils/data";

const Contents = ({ name }) => {
  const [content, setContent] = React.useState(getData);
  console.log(name);

  function onAddContentHandler({ title, body }) {
    setContent(() => {
      return [
        {
          id: +new Date(),
          createdAt: +new Date(),
          title,
          body,
        },
        ...content,
      ];
    });
    console.log(content);
  }

  return (
    <div className="contents">
      <AddContent addContent={onAddContentHandler} />
      {content.map((content) => (
        <div className="content" key={content.id}>
          <div className="user">
            <div className="user_info">
              <img
                src={`https://ui-avatars.com/api/?name=${content.name === undefined ? name : content.name
                }&background=random`}
                alt="name avatar"
              />
             <div className="made">
                <span className="name">
                  {content.name === undefined ? name : content.name}
                </span>
                <span className="date">Recently added at {showFormattedDate(content.createdAt)}</span>
              </div>
            </div>
          </div>
          <div className="body__content">
            <span>{content.title}</span>
            <span>{content.body}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contents;
