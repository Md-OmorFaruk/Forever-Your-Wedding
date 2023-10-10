import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout/Layout';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
import Services from './Services/Services';
import Blog from './Blog/Blog';
import Login from './Login/Login';
import Register from './Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/services',
        element:<Services></Services>
      },
      {
        path: '/blog',
        element:<Blog></Blog>
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/register',
        element:<Register></Register>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
