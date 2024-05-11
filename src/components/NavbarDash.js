import React from 'react';
import Logo from './Logo'; 
import raissa from './Raissa.jpeg'

function Navbar() {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#26408B',
    padding: '5px',
    color: 'white',
    height: '60px',
  };

  const username = 'Nome do Usuário'; 


  return (
    <div style={navbarStyle}>
      <Logo /> 
      <div style={{marginLeft: '120px'}}>
        <h2>Dashboard</h2>
      </div>
      <div style={{display: 'flex', alignItems: 'center'}}>
      <span>{username}</span>
      <img src={raissa} alt="Descrição da Imagem" style={{marginLeft: '10px', borderRadius: '50px', height: '50px', width: '50px'}}/>
    </div>
    </div>
  );
}

export default Navbar;
