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
        ...content,
        {
          id: +new Date(),
          createdAt: +new Date(),
          title,
          body,
        },
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
            <div className="item__image">
              <img
                className="user__image"
                src={`https://ui-avatars.com/api/?name=${
                  content.name === undefined ? name : content.name
                }&background=random`}
                alt="name avatar"
              />
              <h4 className="name">
                {content.name === undefined ? name : content.name}
              </h4>
            </div>
            <h2>{content.title}</h2>
            <p>{showFormattedDate(content.createdAt)}</p>
          </div>
          <div className="body__content">
            <h4>{content.body}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contents;
