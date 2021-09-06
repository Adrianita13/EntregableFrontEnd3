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
        const {opciones}= this.props;

       return(
       <div>
            <h1> Elige tu propia aventura </h1>
            <HistoriaItem data={data} agregarItem={this.agregarItem} />
            <p> Selección anterior: {opciones}</p>
            <p> Historial de elecciones elegidas : {} </p>

            <ul>
                {this.state.historiaCompleta.map(function(item) {
                    return (<li key={item.id}>{item.historia}</li>)
                }
                 )}
            </ul>
        </div>
        )
    }

}

export default Aventura;