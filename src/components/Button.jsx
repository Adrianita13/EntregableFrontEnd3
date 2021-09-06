import React from 'react';

class Button extends React.Component {

   
   


    render() {
        const {handleClick, opcion}= this.props;
        return (
            <button onClick={handleClick} style={{ color: "red" }}> {opcion} </button>
        )
    }
}

export default Button;