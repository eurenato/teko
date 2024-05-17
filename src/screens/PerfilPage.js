//import React, { useState } from 'react';
import '../components/PerfilPage.css';
import tekoagua from '../img/tekoagua.png';
import { FaUser } from 'react-icons/fa'; // Importe o ícone que você deseja usar
import sobre from'../img/help_FILL0_wght400_GRAD0_opsz24.png'

<link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet"></link>
const PerfilPage = () => {
    return(
        <div>
            <header className="blue-bar2">
                <img src={tekoagua} alt='teko' className='tekoagua'/>
                <h1 className='title'>TekoÁgua</h1>
            </header>
            <div className='perfil'>
                <h2 className='titulop'>PERFIL</h2>
                    <div className='avatar-container'>
                        <FaUser className='avatar'/> {/* Substitua a imagem do avatar pelo ícone */}
                    </div>
                <div className='user-info'>
                    <div>
                        <label >
                            <strong>Nome:</strong>
                        </label>
                        <p>Resultado do forms</p>
                        <line/>
                    </div>
                    <div>
                        <label>
                            <strong>Email:</strong>
                        </label>
                        <p>Resultado do forms</p>
                        <line/>
                    </div>
                </div>
                    <div className='alo'>
                        
                        <a href="#" className="sobre-nos" onClick={() => console.log("sobrenos")}> <img src={sobre} className='sobrei'/>Sobre nós</a>
                        <button className='voltar'>Voltar</button>
                        <button className='sair'>Sair</button>
                    </div>
            </div>
        </div>
    );
};
export default PerfilPage;
