// * Base
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

// * Styles
import './styles/normalize.css';
import './styles/index.css';

// * Router
import router from './routes.jsx';

// * Render
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
