import React from "react";
import './Button.css'

const Button = ({ onClick, type, allowed } ) => {
    return (
        <button style={{cursor: allowed}}className="buyButton" onClick={onClick}>
            {type}
        </button>
    );
};

export default Button;
