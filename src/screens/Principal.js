
import ReactPlayer from 'react-player';
import '../index.css'
import Content from '../components/Content.js'
import NavBar from '../components/NavBar.js';
import Integrantes from '../components/Integrantes.js';
import Teko from '../img/Tekoagua.png'
import Raissa from '../img/Raissa.jpeg'
import Rafael from '../img/Rafael.jpeg'
import Ethan from '../img/Ethan.jpeg'
import Lucas from '../img/Lucas.jpeg'
import Igor from '../img/Igor.png'
import Renato from '../img/Renato.jpeg'
import Manuel from '../img/Manuel.jpeg'

function Principal() {
  return (
    <div className="App">
      <NavBar/>
      <div id='quemSomos' className='sobreNos'>
      <div style={{marginLeft: '40px'}}>
        <Content
          text={<div style={{marginBottom: '40px', fontSize: '40px'}}>Quem Somos?</div>}
          textb={
            <div style={{ maxWidth: '60%' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus est turpis, consectetur ac dapibus ut, egestas quis neque. 
              Aliquam quam ipsum, ultricies id aliquet non, elementum vitae sem. Vivamus imperdiet ante nisi, vel convallis est iaculis et. 
              Nunc ut orci ac ligula ultricies pulvinar id id quam.
            </div>
          }
        />
      </div> 
        <ReactPlayer url='https://www.youtube.com/watch?v=PuRcj4yvfso' width='1224px' height='320px' style={{marginRight: '140px'}}/>
      </div>
      
      <div id='Nos' style={{width: '100vw', height: '100vh',backgroundColor: '#26408B',display: 'flex', flexDirection: 'column', justifyContent: 'center',}}>
        <div style={{textAlign: 'center', fontSize: '25px', marginBottom: '80px'}}><Content color='#FFFFFF' text="Integrantes"/></div>

        <div className='integrantesEstilo'> 
          
          
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
            <img 
                src={Raissa} alt='Raissa'
                style={{
                  borderRadius: '80px',
                  width: '150px',
                  height: '150px', 
                }}
            />
            <Integrantes
                color='#FFFFFF'
                titulo="Raissa Oliveira" 
                paragrafo="BackEnd"
              />
          </div>

          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
            <img 
                src={Rafael} alt='Rafael'
                style={{
                  borderRadius: '80px',
                  width: '150px',
                  height: '150px'
                }}
            />
            <Integrantes 
                color='#FFFFFF'
                titulo="Rafael Ponciano" 
                paragrafo="Engenheiro"
              />
          </div>

          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
            <img 
                src={Ethan} alt='Ethan'
                style={{
                  borderRadius: '80px',
                  width: '150px',
                  height: '150px'
                }}
            />
            <Integrantes
                color='#FFFFFF' 
                titulo="Ethan Costa" 
                paragrafo="FrontEnd"
              />
          </div>

          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
            <img 
                src={Lucas} alt='Lucas'
                style={{
                  borderRadius: '80px',
                  width: '150px',
                  height: '150px'
                }}
            />
            <Integrantes
                color='#FFFFFF' 
                titulo="Lucas Alves" 
                paragrafo="BackEnd"
              />
          </div>

          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
            <img 
                src={Teko} alt='Bea'
                style={{
                  borderRadius: '80px',
                  width: '150px',
                  height: '150px'
                }}
            />
            <Integrantes
                color='#FFFFFF' 
                titulo="Beatriz Arini" 
                paragrafo="Publicitaria"
              />
          </div>

          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
            <img 
                src={Igor} alt='Igor'
                style={{
                  borderRadius: '80px',
                  width: '150px',
                  height: '150px'
                }}
            />
            <Integrantes 
                color='#FFFFFF'
                titulo="Igor Gonçalves" 
                paragrafo="Engenheiro"
              />
          </div>

          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
            <img 
                src={Renato} alt='Renato'
                style={{
                  borderRadius: '80px',
                  width: '150px',
                  height: '150px'
                }}
            />
            <Integrantes 
                color='#FFFFFF'
                titulo="Renato Vasconcelos" 
                paragrafo="FrontEnd"
              />
          </div>

          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
            <img 
                src={Manuel} alt='Teko'
                style={{
                  borderRadius: '80px',
                  width: '150px',
                  height: '150px'
                }}
            />
            <Integrantes
                color='#FFFFFF' 
                titulo="Manuel Uliana" 
                paragrafo="Administrador"
                
              />
          </div>

        
        </div>     
      </div>


      <div id='saibaMais' style={{width: '100vw', height: '100vh',}}>
        
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',}}> 
            <div style={{ textAlign: 'center', fontSize: '25px', marginTop: '170px' }}>
              <Content
                text="Objetivos a Resolver"
                colorb='#26408B' 
                textb="A TekoAgua reverte essa situação"
              />
            </div>
          </div> 
        
      </div>


    </div>
  );
}

export default Principal;
