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
            agregarItem(historiaActual)
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

        
        const historiaActual = this.getHistoriaActual()

        return (
            <>
                <p>{historiaActual.historia} </p>

                <Button handleClick={this.handleClick} opcion="a" />
                <p>{historiaActual.opciones.a}</p>
                <Button handleClick={this.handleClick} opcion="b" />
                <p>{historiaActual.opciones.b}</p>

            </>
        )
    }

}
export default HistoriaItem;