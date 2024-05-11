import React from 'react';
import logoImage from '../img/Tekoagua.png';

function Logo() {
    const logoStyle = {
        width: '70px', 
        height: '70px',
      };
    
      return <img src={logoImage} alt="Logo" style={logoStyle} />;
    }

export default Logo;
