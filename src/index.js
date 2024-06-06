import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Dashboard from './screens/Dashboard/DashBoard';
import Principal from './screens/Principal/Principal'
import PerfilPage from './screens/PerfilPage/PerfilPage';
import LoginPage from './screens/LoginPage/LoginPage';
import { UserProvider } from './contexts/authenticatedContext';
//import Login from './screens/LoginPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <Router>
        <Routes> {/* Envolve todas as rotas */}
          <Route path="/Dashboard" element={<Dashboard />} /> {/* Use 'element' em vez de 'component' */}
          <Route path="/perfil" element={<PerfilPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/" element={<Principal/>} />
        </Routes>
      </Router>
    </UserProvider>
  </React.StrictMode>
);


