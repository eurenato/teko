import '../components/Content.css'

function Content(props) {
    return (
        <div>
            <h1 style={{color: props.color}}>{props.text}</h1>
            <p style={{color: props.colorb}}>{props.textb}</p>
        </div>
    )
}

export default Content;