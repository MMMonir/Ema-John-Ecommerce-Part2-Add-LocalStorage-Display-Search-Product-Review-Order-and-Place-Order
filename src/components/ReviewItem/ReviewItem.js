import React from 'react';

const ReviewItem = ({ product }) => {
    const { name, price, quantity } = product;
    return (
        <div>
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <p>Quantity: {quantity}</p>
            <button className="reg-btn">Remove</button>
        </div>
    );
};

export default ReviewItem;