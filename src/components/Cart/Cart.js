import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    return (
        <div>
            <h1>Order summary</h1>
            <p>Items Ordered: {cart.length} </p>
        </div>
    );
};

export default Cart;