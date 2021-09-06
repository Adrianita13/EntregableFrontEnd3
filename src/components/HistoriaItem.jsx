import React from 'react';
import Button from "./Button";


class HistoriaItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numeroHistoria: 1,
            letraHistoria: "",

        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault()        
        this.setState(prevState => {
            return {
                ...prevState,
                numeroHistoria: prevState.numeroHistoria + 1,
                letraHistoria: e.target.textContent.trim()
            }
        }, () => {

            
            const { agregarItem } = this.props
            const historiaActual = this.getHistoriaActual()
            agregarItem({id : historiaActual.id, letra : e.target.textContent.trim()})
        }
        
        )


    }

    getHistoriaActual() {

        const { data } = this.props;

        const identificador =  this.state.numeroHistoria + this.state.letraHistoria;
        
        const historiaActual = data.find(historia => historia.id === identificador)
        return historiaActual;
        
    }


    render() {
        console.log("render");

        const { finDeLasOpciones } = this.props

        
        const historiaActual = this.getHistoriaActual()

        const enabled = this.state.numeroHistoria < finDeLasOpciones

        return (
            <>
                <p>{historiaActual.historia} </p>

                <Button handleClick={this.handleClick} opcion="a" enabled={enabled} />
                <p>{historiaActual.opciones.a}</p>
                <Button handleClick={this.handleClick} opcion="b"  enabled={enabled} />
                <p>{historiaActual.opciones.b}</p>

                

            </>
        )
    }

}
export default HistoriaItem;