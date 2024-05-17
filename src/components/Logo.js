import React from 'react';
import logoImage from '../img/tekoagua.png';

function Logo() {
    const logoStyle = {
        width: '110px', 
        height: '110px',
        marginTop: '12px'
      };
    
      return <img src={logoImage} alt="Logo" style={logoStyle} />;
    }

export default Logo;
