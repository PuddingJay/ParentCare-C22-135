import React, { useContext, useState } from "react";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import NavBar from "./components/nav-bar/NavBar";
import LeftBar from "./components/left-bar/LeftBar";
import RightBar from "./components/right-bar/RightBar";
import { Route, Outlet, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import "./style.scss";
import { putAccessToken, getUserLogged } from "./utils/api";
import { useSearchParams } from "react-router-dom";
import { DarkModeContext } from "./context/darkModeContext";
import { getData } from "./utils/data";
import useInput from "./hooks/useInput";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const [content, setContent] = React.useState(getData);

  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useInput(() => {
    return searchParams.get("keyword") || "";
  });

  const [authedUser, setAuthedUser] = useState(null);
  const [initialization, setInitialization] = useState(true);

  const filteredContent = content.filter((content) => {
    return content.title.toLowerCase().includes(keyword.toLowerCase());
  });

  function onSearchEventHandler({ keyword = "" }) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    setAuthedUser(data);
  }

  React.useEffect(() => {
    async function fetchAccessToken() {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitialization(false);
    }
    fetchAccessToken();
  }, []);

  function onLogout() {
    setAuthedUser(null);
    putAccessToken("");
  }

  if (initialization) {
    return null;
  }

  if (authedUser === null) {
    return (
      <Routes>
        <Route path="/*" element={<Login loginSuccess={onLoginSuccess} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    );
  }

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <NavBar
          logout={onLogout}
          name={authedUser.name}
          setKeyword={setKeyword}
          onSearch={onSearchEventHandler}
        />
        <div className="background">
          <div className="outletContainer">
            <LeftBar onSearch={onSearchEventHandler} />
            <div className="outletItem">
              <Outlet />
            </div>
            <RightBar />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={
              <Home
                name={authedUser.name}
                keyword={keyword}
                content={content}
                setContent={setContent}
                filteredContent={filteredContent}
              />
            }
          />
          <Route
            path="/detail/:id"
            element={<Detail name={authedUser.name} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
