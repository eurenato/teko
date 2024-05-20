import React, { useState } from 'react';
import '../../components/LoginPage.css';
import tekoagua from '../../img/tekoagua.png';
import { loginUser, createUser } from './loginPageRequests';
import { Navigate, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [activeForm, setActiveForm] = useState('login');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ nomeCompleto: '', email: '', senha: '' });
  const navigate = useNavigate()

  const handleLoginChange = e => {
    const { name, value } = e.target;
    setLoginData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSignupChange = e => {
    const { name, value } = e.target;
    setSignupData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleLoginSubmit = async e => {
    e.preventDefault();
    console.log("Login:", loginData);
    try {
      const login = await loginUser(loginData);
      if (login.ok) {
        navigate('/dashboard');
      } else {
        console.log("Erro no login");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };
  

  const handleSignupSubmit = e => {
    e.preventDefault();
    console.log("Cadastro:", signupData);
  };

  return (
    <div>
      <header className="blue-bar">
        <img src={tekoagua} className='tekoagua'/>
      </header>
      <div className="login-page">
        <div className={`signup-form ${activeForm !== 'signup' ? 'inactive' : ''}`}>  
          <h2 className='titulo' onClick={() => setActiveForm('signup')}>CADASTRO</h2>
          <form onSubmit={handleSignupSubmit}>
            <input type="text" name="nomeCompleto" placeholder="Nome Completo" value={signupData.nomeCompleto} onChange={handleSignupChange} />
            <input type="email" name="email" placeholder="Email" value={signupData.email} onChange={handleSignupChange} />
            <input type="password" name="senha" placeholder="Senha" value={signupData.senha} onChange={handleSignupChange} />
            <div className="buttons">
              <button className="av" type="submit">Avançar</button>
              <a href="#" className="voltar" onClick={() => console.log("Voltar")}>Voltar</a>
            </div>
          </form>
        </div>
        <div className={`login-form ${activeForm !== 'login' ? 'inactive' : ''}`}>  
          <h2 className='titulo' onClick={() => setActiveForm('login')}>LOGIN</h2>
          <form onSubmit={handleLoginSubmit}>
            <input type="email" name="email" placeholder="Email" value={loginData.email} onChange={handleLoginChange} />
            <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleLoginChange} />
            <div className="buttons">
              <button className="av" type="submit">Avançar</button>
              <a href="#" className="voltar" onClick={() => console.log("Voltar")}>Voltar</a>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
