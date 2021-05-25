import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shops.css';

const Shops = () => {
    const first10= fakeData.slice(0,10);
    const [products, setProducts]= useState(first10);

    return (
        <div className="shop-container">
            <div className="product-container">
            <ul>
                {
                    products.map(pd=> <Product product={pd}></Product>)
                }
            </ul>
            </div>
            <div className="cart-container">
                <h3>This is cart</h3>
            </div>
            
        </div>
    );
};

export default Shops;