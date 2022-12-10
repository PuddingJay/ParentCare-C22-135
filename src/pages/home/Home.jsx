import React from "react";

import Contents from "../../components/contents/Contents";
import "./home.scss";

const Home = ({ name, content, setContent, filteredContent }) => {
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
