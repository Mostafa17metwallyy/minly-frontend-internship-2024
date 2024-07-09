import React, { useState } from 'react';

const SupermarketCounter = () => {
    const [quantity, setQuantity] = useState(0);
    const pricePerItem = 5.00;
    
    const increment = () => {
        setQuantity(quantity + 1);
    };
    
    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };
    
    const calculateTotal = () => {
        return (quantity * pricePerItem).toFixed(2);
    };
    
    return (
        <div>
            <h1>Supermarket Counter</h1>
            <h2>Apple</h2>
            <div>
                <button onClick={decrement}>-</button>
                <span>{quantity}</span>
                <button onClick={increment}>+</button>
            </div>
            
            
            <h2>Oranges</h2>
            <div>
                <button onClick={decrement}>-</button>
                <span>{quantity}</span>
                <button onClick={increment}>+</button>
            </div>
            
            <h2>Lemon</h2>
            <div>
                <button onClick={decrement}>-</button>
                <span>{quantity}</span>
                <button onClick={increment}>+</button>
            </div>
            
            <h2>carrot</h2>
            <div>
                <button onClick={decrement}>-</button>
                <span>{quantity}</span>
                <button onClick={increment}>+</button>
            </div>
            
            
            <h2>Total: ${calculateTotal()}</h2>
        
        </div>
    
    
    );
};

export default SupermarketCounter;
