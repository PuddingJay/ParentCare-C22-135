import React from 'react';
import './addContent.scss';
import useInput from '../../hooks/useInput';

const AddComment = ({ addComment }) => {

  const [comment, onBodyChangeEventHandler, setBody] = useInput("");

  function onSubmitEventHandler(event) {
    event.preventDefault();
    addComment({ comment });
    setBody("");
  }

  return (
    <div className="addComment">
      <form onSubmit={onSubmitEventHandler}>
        <p>Komentar</p>
        <textarea
          required
          type="text"
          placeholder="Sikat"
          cols="20"
          rows="3"
          value={comment}
          onChange={onBodyChangeEventHandler}
        ></textarea>
        <button type="submit">Curhat</button>
      </form>
    </div>
  )
}

export default AddComment;
