// * Base
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import React from 'react';

// * Styles
import './styles/normalize.css';
import './styles/index.css';

// * Render
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
