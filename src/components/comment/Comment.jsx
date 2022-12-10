import React from 'react';
import { getData, showFormattedDate } from '../../utils/data';
import './comment.scss';
import { useState } from 'react';
import AddComment from '../addComment/AddComment';
import { useParams } from 'react-router-dom';

const Comment = ({ name }) => {
  const { id } = useParams();

  const [prevComment, setComment] = useState(getData()[id - 1].children)

  function onAddContentHandler({ comment }) {
    setComment(() => {
      return [
        {
          id: +new Date(),
          createdAt: 'Recently added at ' + new Date(),
          comment
        },
        ...prevComment
      ];
    });
  }

  console.log(prevComment)


  return (
    <div className="contents">
      <AddComment addComment={onAddContentHandler} />
      {prevComment.map((prevComment) => (
        <div className="content" key={prevComment.id}>
          <div className="user">
            <div className="user__info">
              <img
                src={`https://ui-avatars.com/api/?name=${prevComment.name === undefined ? name : prevComment.name
                  }&background=random`}
                alt="name avatar"
              />
              <div className="made">
                <span className="name">
                  {prevComment.name === undefined ? name : prevComment.name}
                </span>
                <span className="date">
                  {showFormattedDate(prevComment.createdAt)}
                </span>
              </div>
            </div>
            <div className="body__content">
              <span></span>
              <span>{prevComment.comment}</span>
            </div>


          </div>
        </div>
      ))}
    </div>
  )
}
export default Comment;