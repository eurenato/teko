import React from 'react';
import { Nav } from 'react-bootstrap';
import Logo from './Logo';

function Navbar() {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#26408B',
    padding: '10px',
    color: 'white',
    height: '60px',
    position: 'fixed',
    width: '100%',
    top: '0', 
    zIndex: '100',
    boxSizing: 'border-box',
  };

  const linkStyle = {
    color: 'white',
    marginRight: '10px',
  };

  const buttonStyle = {
    backgroundColor: '#ED7441',
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '12px',
  };

  return (
    <div style={navbarStyle}>
      <Logo /> 
      <Nav className="ml-auto">
        <Nav.Link href="#quemSomos" style={linkStyle}>Quem Somos</Nav.Link>
        <Nav.Link href="#Nos" style={linkStyle}>Integrantes</Nav.Link>
        <Nav.Link href="#saibaMais" style={linkStyle}>Saiba Mais</Nav.Link>
        <button style={buttonStyle}>Entrar</button>
      </Nav>
    </div>
  );
}

export default Navbar;
