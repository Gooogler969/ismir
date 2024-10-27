import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ServicePage from './pages/ServicePage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter ([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "service",
    element: <ServicePage/>,
  },
  {
    path: "portfolio",
    element: <PortfolioPage/>,
  },
  {
    path: "about",
    element: <AboutPage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={router} />
  
);

reportWebVitals();
