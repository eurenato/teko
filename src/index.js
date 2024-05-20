import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Dashboard from './screens/DashBoard';
import Principal from './screens/Principal/Principal'
import PerfilPage from './screens/PerfilPage/PerfilPage';
import LoginPage from './screens/LoginPage/LoginPage';
//import Login from './screens/LoginPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router>
      <Routes> {/* Envolve todas as rotas */}
        <Route path="/" element={<Principal />} /> {/* Use 'element' em vez de 'component' */}
        <Route path="/perfil" element={<PerfilPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


