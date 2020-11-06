import React from 'react';
import './css/SubTotal.css';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from './StateProvider';
import {getBasketTotal} from '../reducer';

function SubTotal() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="subTotal">
            <CurrencyFormat
            renderText={(value)=> (
                <>
                <p>
                    Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
                </p>
                <small className="subTotal__gift">
                    <input type="checkbox" />This Order Contains a Gift
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"} />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default SubTotal
