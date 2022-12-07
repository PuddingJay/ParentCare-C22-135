import React from 'react';
import './addContent.scss';

const AddContent = ({ addContent }) => {
  const [name, setName] = React.useState('');
  const [body, setBody] = React.useState('');

  function onNameChangeEventHandler(event) {
    setName(event.target.value);
  }

  function onBodyChangeEventHandler(event) {
    setBody(event.target.value)
  }

  function onSubmitEventHandler(event) {
    event.preventDefault();
    addContent(name, body)
  }

  return (
    <div className='addContent'>
      <form onSubmit={onSubmitEventHandler}>
        <h2>Curahkan</h2>
        <input type="text" placeholder='Curhat Dong' value={name} onChange={onNameChangeEventHandler} />
        <textarea type="text" placeholder='Sikat' cols="20" rows="10" value={body} onChange={onBodyChangeEventHandler}></textarea>
        <button type="submit">Curhat</button>
      </form>
    </div>
  )
}

export default AddContent;