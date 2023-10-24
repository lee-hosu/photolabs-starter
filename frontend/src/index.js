import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import HomeRoute from './routes/HomeRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomeRoute />
  </React.StrictMode>
);
