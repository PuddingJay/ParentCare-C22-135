import React from 'react';
import './addContent.scss';

const AddContent = () => {
  return (
    <div className='addContent'>
      <form>
        <h2>Curahkan</h2>
        <input type="text" placeholder='Curhat Dong' />
        <textarea type="text" placeholder='Sikat' cols="20" rows="10"></textarea>
        <button type="submit">Curhat</button>
      </form>
    </div>
  )
}

export default AddContent;