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

                numeroHistoria: prevState.numeroHistoria + 1,
                letraHistoria: e.target.textContent
            }
        }
            , () => {
                const { agregarItem } = this.props
                const historiaElegida = this.getHistoriaElegida()
                agregarItem({ id: historiaElegida.id, letra: this.state.letraHistoria })
            }
        )

    }

    getHistoriaElegida() {

        const { data } = this.props;

        const identificador = this.state.numeroHistoria + this.state.letraHistoria;

        const historiaActual = data.find(historia => historia.id === identificador)
        return historiaActual;

    }


    render() {
        console.log("render");

        const finDeLasOpciones = (this.props.data.length + 1) / 2

        const historiaActual = this.getHistoriaElegida()

        const deshabilitarBoton = this.state.numeroHistoria < finDeLasOpciones

        return (
            <>
                <h2 className="historia">{historiaActual.historia} </h2>

                <div className="opciones">
                    <div className="opcion"><Button handleClick={this.handleClick} opcion="a" deshabilitarBoton={deshabilitarBoton} />
                        <h2>{historiaActual.opciones.a}</h2> </div>
                    <div className="opcion">
                        <Button handleClick={this.handleClick} opcion="b" deshabilitarBoton={deshabilitarBoton} />
                        <h2>{historiaActual.opciones.b}</h2>
                    </div>
                </div>
            </>
        )
    }


}
export default HistoriaItem;