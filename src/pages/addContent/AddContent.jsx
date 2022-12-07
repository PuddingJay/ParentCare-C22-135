import React from 'react';
import './addContent.scss';
import useInput from '../../hooks/useInput';

const AddContent = ({ addContent }) => {
  const [name, onNameChangeEventHandler, setName] = useInput('');
  const [body, onBodyChangeEventHandler, setBody] = useInput('');


  function onSubmitEventHandler(event) {
    event.preventDefault();
    addContent({ name, body })
    setName('');
    setBody('');
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