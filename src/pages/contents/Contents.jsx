import React from 'react';
import './contents.scss';
import AddContent from '../addContent/AddContent';
import { getData, showFormattedDate } from '../../utils/data';

const Contents = () => {
  const [content, setContent] = React.useState(getData);

  function onAddContentHandler({ name, body }) {
    setContent(() => {
      return [
        ...content,
        {
          id: +new Date(),
          createdAt: +new Date(),
          name,
          body,
        }
      ]
    })
    console.log(content)
  }

  return <div className="contents">
    <AddContent addContent={onAddContentHandler} />
    {content.map(content => (
      <div className="content" key={content.id}>
        <div className="user">
          <h2>{content.name}</h2>
          <p>{showFormattedDate(content.createdAt)}</p>
        </div>
        <div className="body__content">
          <h4>{content.body}</h4>
        </div>
      </div>
    ))}
  </div>

};

export default Contents;