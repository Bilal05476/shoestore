import React from 'react';
import star from './images/star.png';
import './css/CheckoutProduct.css';
import {useStateValue} from './StateProvider';

function CheckoutProduct({id, title, image, price, rating}) {
    const [{}, dispatch] = useStateValue();
    
    const removefromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id
        })
    }
    return (
        <div className="checkout__product">
            <img className="checkoutProduct__image" src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                {
                    Array(rating).fill().map((_) => (
                        <img className="rating__star" src={star} />
                    ))
                }
                </div>
                <button onClick={removefromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
