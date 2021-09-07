import React from 'react';

class Button extends React.Component {


    render() {
        const {handleClick,opcion, deshabilitarBoton}= this.props;

        return (
            <button className="botones" onClick={handleClick}  disabled={!deshabilitarBoton} >{opcion}</button>
        )
    }
}

export default Button;