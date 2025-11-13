import React, { useContext } from 'react';
import raissa from '../img/Raissa.jpeg';
import { UserContext } from '../contexts/authenticatedContext';

function Navbar() {
  const { currentUser } = useContext(UserContext);

  const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: 'linear-gradient(to right, #06452A, #0A8754, #06452A)', // Escuro-Claro-Escuro
  padding: '8px',
  color: '#D1D5DB',
  height: '60px',
  transition: 'background 0.5s ease-in-out', // Transição suave
  marginBottom: '25px'
};
const tituloStyle = {
  fontSize: '28px',
  fontWeight: '700',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  margin: 0,
};
  return (
    <div style={navbarStyle}>
      <div style={{ marginLeft: '640px' }}>
        <h2 style={tituloStyle}>Meu Dashboard</h2>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>{currentUser ? currentUser.name : ""}</span>
        <img
          src={raissa}
          alt="Descrição da Imagem"
          style={{ borderRadius: '50px', height: '50px', width: '50px' }}
        />
      </div>
    </div>
  );
}

export default Navbar;