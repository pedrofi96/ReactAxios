import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap'


import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom';
//paginas:

import Home from './routes/Home.jsx';
import NewPost from './routes/NewPost.jsx';

const router = createBrowserRouter([
  {
  element: <App/>,
  children: [
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/new",
      element : <NewPost/>,
    },
  ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
