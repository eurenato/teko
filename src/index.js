import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Dashboard from './screens/DashBoard';
import Principal from './screens/Principal';
import PerfilPage from './screens/PerfilPage';
import LoginPage from './screens/LoginPage';
//import Login from './screens/LoginPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PerfilPage />
  </React.StrictMode>
);


