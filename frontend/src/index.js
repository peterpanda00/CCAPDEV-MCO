import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import About from './pages/About';
import Rooms from './pages/Rooms';
import Memories from './pages/Memories';
import Booking from './pages/Booking';
import Contact from './pages/Contact';

import {
  createBrowserRouter,
  RouterProvider,
  Route,

}from "react-router-dom";


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"about",
    element:<About/>
  },
  {
    path:"rooms",
    element:<Rooms/>
  },
  {
    path:"memories",
    element:<Memories/>
  },
  {
    path:"booking",
    element:<Booking/>
  },
  {
    path:"contact",
    element:<Contact/>
  }


])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={router}/>
  
  
);

