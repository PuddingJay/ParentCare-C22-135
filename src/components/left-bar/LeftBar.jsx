import React from 'react';
import './leftBar.scss';

const dataCategory = [
  "Semua",
  "Tantrum",
  "Tidak Patuh",
  "Berbohong",
  "Tertutup",
  "Sibling Rivalry",
  "Ketagihan Gadget",
  "Tidak Mau Belajar"
];

const LeftBar = () => {
  function onFilterCategory(event) {
    const word = event.target.textContent.split(" ");
    let keyword;

    if (word[0] === "Semua") {
      return onSearch({ keyword });
    } else if (word.length === 1) {
      keyword = word[0];
    } else if (word.length === 2) {
      keyword = word[1];
    } else {
      keyword = word[2];
    }
    return onSearch({ keyword });
  }

  return (
    <div className='leftBar'>
      <div className="container">
        <div className="menu">
          <div className="category">
            <h3>Category</h3>
          </div>
          <div className="item">
            <ul>
              {dataCategory.map((item) => (
                <li onClick={onFilterCategory}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar;