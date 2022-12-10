import React from 'react'
import './detail.scss';
import { useParams } from 'react-router-dom';
import { getData } from '../../utils/data';
import Comment from '../../components/comment/Comment';


const Detail = ({ name }) => {
  const { id } = useParams();
  const data = getData()[id - 1];

  return (
    <div className="detail">
      <div className="content">
        <div className="body__content">
          <span>{data.title}</span>
          <span>{data.body}</span>
        </div>
      </div>
      <Comment name={name} />
    </div>
  )
}

export default Detail;