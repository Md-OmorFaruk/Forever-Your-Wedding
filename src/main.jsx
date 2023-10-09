import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Layout/Root';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register';
import Services from './Pages/Services/Services';
import AboutUS from './Pages/AboutUs/AboutUS';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/register',
        element:<Register></Register>
      },
      {
        path: '/services',
        element:<Services></Services>
      },
      {
        path: '/aboutUs',
        element:<AboutUS></AboutUS>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
