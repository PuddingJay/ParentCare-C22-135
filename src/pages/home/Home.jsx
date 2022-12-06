import React from 'react';
import AddContent from '../addContent/AddContent';
import Contents from '../contents/Contents';
import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <AddContent />
      <Contents />
    </div>
  )
}

export default Home;