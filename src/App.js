import React, { useState } from "react";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import NavBar from "./components/nav-bar/NavBar";
import LeftBar from "./components/left-bar/LeftBar";
import RightBar from "./components/right-bar/RightBar";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import "./style.scss";
import { putAccessToken, getUserLogged } from "./utils/api";

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initialization, setInitialization] = useState(true);

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
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Login loginSuccess={onLoginSuccess} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    );
  }

  const Layout = () => {
    return (
      <div>
        <NavBar logout={onLogout} name={authedUser.name} />
        <div style={{ backgroundColor: "#f1f2f2" }}>
          <div style={{ display: "flex", width: "1072px", margin: "0 auto" }}>
            <LeftBar />
            <div style={{ flex: 5 }}>
              <Outlet />
            </div>
            <RightBar />
          </div>
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home name={authedUser.name} />,
        },
        {
          path: "/detail/:id",
          element: <Detail />,
        },
      ],
    },
    {
      path: "/*",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
