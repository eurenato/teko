import React, { useContext, useState } from 'react';
import '../../components/LoginPage.css';
import tekoagua from '../../img/tekoagua.png';
import { LoginUser, CreateUser } from './loginPageRequests';
import { Navigate, useNavigate } from 'react-router-dom';
import { Toast } from 'react-bootstrap';
import { UserContext } from '../../contexts/authenticatedContext';
const LoginPage = () => {
  const [activeForm, setActiveForm] = useState('login');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '', company: "7f8877bd-c104-46c2-a695-980648a68a2e"});
  const {user, setUser} = useContext(UserContext)
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
      const login = await LoginUser(loginData);
      if (login) {
        console.log(login)
        setUser({
          name: loginData.name,
          email: loginData.email
        })
        navigate('/dashboard');
      } else {
        console.log("Erro no login");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };
  

  const handleSignupSubmit = async e => {
    e.preventDefault();
    console.log("Cadastro:", signupData);
    try{
      const signup = await CreateUser(signupData);
      console.log(signup)
      if(signup){
        setUser({
          name: signupData.name,
          email: signupData.email
        })
        navigate('/dashboard');
      }
    }
    catch (error) {
      console.log("poxa")
    }
  };

  return (
    <div>
      <header className="blue-bar">
        <img src={tekoagua}alt="tekoagua logo" className='tekoagua'/>
      </header>
      <div className="login-page">
        <div className={`signup-form ${activeForm !== 'signup' ? 'inactive' : ''}`}>  
          <h2 className='titulo' onClick={() => setActiveForm('signup')}>CADASTRO</h2>
          <form onSubmit={handleSignupSubmit}>
            <input type="text" name="name" placeholder="Nome Completo" value={signupData.name} onChange={handleSignupChange} />
            <input type="email" name="email" placeholder="Email" value={signupData.email} onChange={handleSignupChange} />
            <input type="password" name="password" placeholder="Senha" value={signupData.password} onChange={handleSignupChange} />
            <div className="buttons">
              <button className="av" type="submit">Avançar</button>
              <a className="voltar" onClick={() => console.log("Voltar")}>Voltar</a>
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
