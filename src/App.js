import React from 'react';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import NavBar from './components/nav-bar/NavBar';
import LeftBar from './components/left-bar/LeftBar';
import RightBar from './components/right-bar/RightBar';
import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom';
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import "./style.scss"

function App() {

  const Layout = () => {
    return (
      <div>
        <NavBar />
        <div style={{ display: 'flex' }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />

          </div>
          <RightBar />
        </div>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/detail/:id',
          element: <Detail />
        },
      ]

    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },

  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;