import React from 'react';
import HistoriaItem from "./HistoriaItem";
import data from "./data.json";

class Aventura extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            historialOpciones: []
        }
        this.agregarItem = this.agregarItem.bind(this)
    }

    agregarItem(item) {
        this.setState(prevState => {
            return {
                historialOpciones: [...prevState.historialOpciones, item]
            }
        })
    }

    render() {



        const ultimaOpcion = this.state.historialOpciones.length > 0 ? this.state.historialOpciones[this.state.historialOpciones.length - 1].letra : "-"


        return (
            <div>
                <h1> Elige tu propia aventura </h1>
                <HistoriaItem data={data} agregarItem={this.agregarItem} />
                <div className="recordatorio">
                    <h3> Selección anterior: {ultimaOpcion}</h3>
                    <h3> Historial de opciones elegidas : {
                        <ul>
                            {this.state.historialOpciones.map(function (item) {
                                return (<li key={item.id}>{item.letra}</li>)
                            }
                            )}
                        </ul>} </h3>
                </div>
            </div>
        )
    }

}

export default Aventura;