import React from "react";
import './Button.css'

const BuyButton = ({ onClick }) => {
    return (
        <button className="buyButton" onClick={onClick}>
            Buy
        </button>
    );
};

export default BuyButton;
