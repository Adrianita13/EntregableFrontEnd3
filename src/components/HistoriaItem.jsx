import React from 'react';
import Button from "./Button";
import data from "./data.json";

class HistoriaItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data,
            numeroHistoria: 1,
            letraHistoria: "",
            historiaActual: {},

        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault()
        //console.log(e.target.textContent)
        this.setState(prevState => {
            return {
                ...prevState,
                numeroHistoria: prevState.numeroHistoria + 1,
                letraHistoria: e.target.textContent.trim()
            }
        })
    }

    componentDidUpdate(prevProps) {

        const identificador = this.state.letraHistoria;
        console.log(identificador)
        const siguienteHistoria = this.state.data.find(historia => historia.id == identificador)
        if (prevProps.historiaActual !== siguienteHistoria) {
            this.setState({ historiaActual: siguienteHistoria });
        }

    }

    render() {

        return (
            <>
                <p>
                    {this.state.data[0].historia}
                </p>

                <Button handleClick={this.handleClick} opcion="a" />
                <p>{this.state.data[0].opciones.a}</p>
                <Button handleClick={this.handleClick} opcion="b" />
                <p>{this.state.data[0].opciones.b}</p>

            </>
        )
    }

}



export default HistoriaItem;