

const Integrantes = (props) => {
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
        <h3 style={{color: props.color, marginBottom: '2px'}}>{props.titulo}</h3>
        <p style={{color: props.color}}>{props.paragrafo}</p>
      </div>
    );
  };

export default Integrantes