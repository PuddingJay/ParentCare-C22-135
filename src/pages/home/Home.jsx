import React from "react";

import Contents from "../contents/Contents";
import "./home.scss";

const Home = ({ name, filteredContent, content, setContent }) => {
  return (
    <div className="home">
      <Contents
        name={name}
        filteredContent={filteredContent}
        content={content}
        setContent={setContent}
      />
    </div>
  );
};

export default Home;
