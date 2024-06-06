
import ReactPlayer from 'react-player';
import '../../index.css'
import Content from '../../components/Content.js'
import NavBar from '../../components/NavBar.js';
import Integrantes from '../../components/Integrantes.js';
import Raissa from '../../img/Raissa.jpeg'
import Rafael from '../../img/Rafael.jpeg'
import Ethan from '../../img/Ethan.jpeg'
import Lucas from '../../img/Lucas.jpeg'
import Igor from '../../img/Igor.png'
import Renato from '../../img/Renato.jpeg'
import Manuel from '../../img/Manuel.jpeg'
import Bea from '../../img/Bel.jpg'
import report from '../../img/Reportagem.jpeg'
import grafico from '../../img/graficolixo.jpeg'

function Principal() {
  return (
    <div className="App">
      <NavBar/>
      <div id='saibaMais' style={{width: '100vw', height: '100vh',}}>
        
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',}}> 
            <div style={{ textAlign: 'center', fontSize: '25px', marginTop: '130px' }}>
              <Content
                text="Objetivos a Resolver"
                colorb='#26408B' 
                textb="A TekoAgua reverte essa situação"
              />

              <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '40px'}}>
              <div style={{backgroundColor: '#26408B', height: '600px', width: '423px', marginRight: '20px', boxSizing: 'border-box', position: 'relative', borderRadius: '50px', marginRight: '80px'}}>
                  <img src={report} alt='Reportagem sobre a falta de coleta do Combú' style={{height: '300px', width: '423px', borderRadius: '50px'}}></img>
                  
                  <h2 style={{fontSize: '1.5rem',color: 'white', textAlign: 'left', marginLeft: '35px'}}>Impacto Ambiental</h2>
                  <p style={{fontSize: '1.1rem',textAlign: 'left', textJustify: 'inter-word', color: 'white', marginLeft: '25px', marginRight: '25px'}}>O acúmulo de lixo pode levar à poluição do solo e da água, afetando a flora e a fauna local. Nosso projeto visa minimizar esse impacto, garantindo que o lixo seja coletado e descartado de maneira adequada.</p>
                  
                  <div style={{float: 'left', marginLeft: '30px', backgroundColor: '#ED7441', borderRadius: '50px', width: '120px'}}>
                    <a href='https://www.oliberal.com/belem/moradores-da-ilha-do-combu-denunciam-que-estao-ha-pelo-menos-uma-semana-sem-receber-coleta-de-lixo-1.701540' style={{color: 'white', textDecoration: 'none', fontSize: '1.2rem'}}>Saiba Mais</a>
                  </div>
              </div>



                <div style={{backgroundColor: '#26408B', height: '600px', width: '423px', marginRight: '20px', boxSizing: 'border-box', position: 'relative', borderRadius: '50px'}}>
                  <img src={grafico} alt='Grafico sobre o lixo' style={{height: '300px', width: '423px', borderRadius: '50px'}}></img>
                  <h2 style={{fontSize: '1.5rem',color: 'white', textAlign: 'left', marginLeft: '35px'}}>Saúde Pública</h2>
                  <p style={{fontSize: '1.1rem',textAlign: 'left', textJustify: 'inter-word', color: 'white', marginLeft: '25px', marginRight: '25px'}}>O lixo acumulado pode se tornar um terreno fértil para a proliferação de doenças. Ao garantir uma coleta de lixo eficiente, nosso projeto protege a saúde dos residentes e visitantes da Ilha do Combu.</p>
                  <div style={{float: 'left', marginLeft: '30px', backgroundColor: '#ED7441', borderRadius: '50px', width: '120px'}}>
                    <a href='https://bdta.ufra.edu.br/jspui/bitstream/123456789/1927/1/Analise%20da%20gest%C3%A3o%20dos%20res%C3%ADduos%20s%C3%B3lidos%20produzidos%20nas%20ilhas%20do%20comb%C3%BA%20e%20cotijuba%20no%20municipio%20de%20belem-pa.pdf' style={{color: 'white', textDecoration: 'none', fontSize: '1.2rem'}}>Saiba Mais</a>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        
      </div>


      <div id='quemSomos' className='sobreNos'>
      <div style={{marginLeft: '100px'}}>
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
        <ReactPlayer url='https://www.youtube.com/watch?v=PuRcj4yvfso' width='2120px' height='460px' style={{marginRight: '170px'}}/>
      </div>
      
      <div id='Nos' style={{width: '100vw', height: '100vh',backgroundColor: '#EBEBEB',display: 'flex', flexDirection: 'column', justifyContent: 'center',}}>
        <div style={{textAlign: 'center', fontSize: '25px', marginBottom: '80px'}}><Content color='#373737' text="Integrantes"/></div>

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
                color='#373737'
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
                color='#373737'
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
                color='#373737' 
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
                color='#373737' 
                titulo="Lucas Alves" 
                paragrafo="BackEnd"
              />
          </div>

          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
            <img 
                src={Bea} alt='Bea'
                style={{
                  borderRadius: '80px',
                  width: '150px',
                  height: '150px'
                }}
            />
            <Integrantes
                color='#373737' 
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
                color='#373737'
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
                color='#373737'
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
                color='#373737' 
                titulo="Manuel Uliana" 
                paragrafo="Administrador"
                
              />
          </div>

        
        </div>     
      </div>

    </div>
  );
}

export default Principal;