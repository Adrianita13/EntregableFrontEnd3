import React from 'react';
import HistoriaItem from "./HistoriaItem";
import data from "./data.json";

class Aventura extends React.Component{
    constructor(props){
        super(props);
        this.state={
            historiaCompleta: []
        }
        this.agregarItem = this.agregarItem.bind(this)
    }

    agregarItem(item) {
        this.setState(prevState => {
            return {
                historiaCompleta: [...prevState.historiaCompleta, item]
            }
        })
    }

    render(){

        const historiaCompletaLength =  this.state.historiaCompleta.length

        const anteultimo = historiaCompletaLength > 0 ? this.state.historiaCompleta[historiaCompletaLength - 1].letra : "-"

        //TODO ; sacar el 5 harcoded y calcularlo aca dinamicamente
       return(
       <div>
            <h1> Elige tu propia aventura </h1>
            <HistoriaItem data={data} agregarItem={this.agregarItem} finDeLasOpciones={5} />
            <p> Selección anterior: {anteultimo}</p>
            <p> Historial de elecciones elegidas : {} </p>

            <ul>
                {this.state.historiaCompleta.map(function(item) {
                    return (<li key={item.id}>{item.letra}</li>)
                }
                 )}
            </ul>
        </div>
        )
    }

}

export default Aventura;