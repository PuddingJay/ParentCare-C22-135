import React from "react";

import Contents from "../contents/Contents";
import "./home.scss";

const Home = ({ name }) => {
  return (
    <div className="home">
      <Contents name={name} />
    </div>
  );
};

export default Home;
