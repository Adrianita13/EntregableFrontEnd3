import React from 'react';

class Button extends React.Component {


    render() {
        const {handleClick,opcion, enabled}= this.props;

        return (
            <button onClick={handleClick}  disabled={!enabled} > {opcion} </button>
        )
    }
}

export default Button;