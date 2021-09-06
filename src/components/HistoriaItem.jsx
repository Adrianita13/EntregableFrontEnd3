import React from 'react';
import Button from "./Button";
import data from "./data.json";

class HistoriaItem extends React.Component{
constructor(props){
    super(props);
    this.state={
        data,
        numeroHistoria: 1
    }

}
handleClick = (e) => {
    e.preventDefault()
    //console.log(e.target.textContent)
    this.setState(prevState =>{
        return{
             ...prevState,
             numeroHistoria : prevState.numeroHistoria +1
        }
     })
     

    console.log(this.state.numeroHistoria)
    const identificador=  this.state.numeroHistoria + e.target.textContent
    console.log(identificador)
    //if(e.target.textContent)
}

 render(){

     return(
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