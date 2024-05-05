import React, { useState } from "react";
import "./Counter.css"

const ProductCounter = () => {
    const [count, setCount] = useState(1); 

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrementCount = () => {
        if (count > 1) {
            setCount(prevCount => prevCount - 1);
        }
    };

    return (
        <div className="productCounter">
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </div>
    );
};

export default ProductCounter;