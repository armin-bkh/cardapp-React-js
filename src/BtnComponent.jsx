import React from 'react';

const BtnComponent = ({ name, innerTxt, event, classes }) =>{
    return (
        <button name={name} className={classes} onClick={event}>
            {innerTxt}
        </button>
    )
}

export default BtnComponent;