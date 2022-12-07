import React from "react";
import "./addContent.scss";
import useInput from "../../hooks/useInput";

const AddContent = ({ addContent }) => {
  const [title, onTitleChangeEventHandler, setTitle] = useInput("");
  const [body, onBodyChangeEventHandler, setBody] = useInput("");

  function onSubmitEventHandler(event) {
    event.preventDefault();
    addContent({ title, body });
    setTitle("");
    setBody("");
  }

  return (
    <div className="addContent">
      <form onSubmit={onSubmitEventHandler}>
        <h2>Curahkan</h2>
        <input
          type="text"
          placeholder="Curhat Dong"
          value={title}
          onChange={onTitleChangeEventHandler}
        />
        <textarea
          type="text"
          placeholder="Sikat"
          cols="20"
          rows="10"
          value={body}
          onChange={onBodyChangeEventHandler}
        ></textarea>
        <button type="submit">Curhat</button>
      </form>
    </div>
  );
};

export default AddContent;
