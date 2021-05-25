import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    const total = cart.reduce( (total, prd) => total + prd.price, 0);

    // let total =0;
    // for (let i =0; i< cart.length; i++){
    //     const product = cart[i];
    //     total = total+ product.price;
    // } // bangla system

    let shipping = 0;
    if (total>15){
        shipping =5;
    }
    else if (total >0){
        shipping =12
    }
    const tax = Math.round(total/10);
    const totalPrice = Math.round(total + shipping + tax);
    return (
        <div>
            <h1>Order summary</h1>
            <h3>Items Ordered: {cart.length} </h3>
            <h4>Total Price: {total} $</h4>
            <p>Shipping Cost: {shipping}</p>
            <p>Tax: {tax}</p> <hr/>
            <p>After Discount: {totalPrice} $</p>
            
        </div>
    );
};

export default Cart; 