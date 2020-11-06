import React from 'react';
import {useStateValue} from './StateProvider';
import './css/Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import SubTotal from './SubTotal';

function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <>
        <br /><br />
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__image" src="https://www.danceshoesstore.com/assets/images/nonp/carousel/DSS-banner-home2-pc.jpg" alt="checkout" />
            {basket?.length === 0 ? (
                <div>
                    <h2 className="checkout__title">Your Basket is Empty :(</h2>
                </div>
            ): (
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.img}
                        price={item.price}
                        rating={item.rating} />
                    ))}
                </div>
            )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <SubTotal />
                </div>
            )}
        </div>
        </>
    )
}

export default Checkout
