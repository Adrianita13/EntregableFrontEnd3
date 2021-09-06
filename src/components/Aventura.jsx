import React from 'react';
import HistoriaItem from "./HistoriaItem";

class Aventura extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
       return(
       <div>
            <h1> Elige tu propia aventura </h1>
            <HistoriaItem />
        </div>
        )
    }

}

export default Aventura;