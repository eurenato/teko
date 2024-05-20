
import ReactPlayer from 'react-player';
import '../../index.css'
import Content from '../../components/Content.js'
import NavBar from '../../components/NavBar.js';
import Integrantes from '../../components/Integrantes.js';
import Teko from '../../img/tekoagua.png'
import Raissa from '../../img/Raissa.jpeg'
import Rafael from '../../img/Rafael.jpeg'
import Ethan from '../../img/Ethan.jpeg'
import Lucas from '../../img/Lucas.jpeg'
import Igor from '../../img/Igor.png'
import Renato from '../../img/Renato.jpeg'
import Manuel from '../../img/Manuel.jpeg'

function Principal() {
  return (
    <div className="App">
      <NavBar/>
      <div id='quemSomos' className='sobreNos'>
      <div style={{marginLeft: '45px'}}>
        <Content
          text={<div style={{marginBottom: '40px', fontSize: '50px'}}>Quem Somos?</div>}
          textb={
            <div style={{ maxWidth: '70%', fontSize: '19px'}}>
              Olá! Nós somos o TekoÁgua.<br/>
              Nossa missão é simples: queremos parar o lixo antes que ele chegue ao mar e fazer isso de um jeito que todo mundo possa ver e participar.
              Acreditamos que a tecnologia pode ser uma aliada poderosa na luta contra a poluição. Com nossa barreira ecológica, não só limpamos a água, mas também coletamos dados que ajudam a entender e melhorar o ciclo de vida do lixo.
              <br/>
              Nossa equipe é formada por engenheiros, programadores e designers que trabalham juntos para criar soluções que façam a diferença. 
              <br/>
              E o melhor? Nós fazemos isso com a ajuda de parceiros incríveis: empresas de gestão de resíduos que estão tão empenhadas quanto nós em deixar um legado positivo para o meio ambiente.
              Juntos, estamos construindo um futuro onde rios limpos não são exceção, mas a regra. E estamos convidando você para fazer parte dessa transformação. 
              <br/>
              Vamos juntos?
            </div>
          }
        />
      </div> 
        <ReactPlayer url='https://www.youtube.com/watch?v=PuRcj4yvfso' width='1820px' height='440px' style={{marginRight: '160px'}}/>
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
