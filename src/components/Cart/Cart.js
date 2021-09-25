import './Cart.css'

import React from 'react';

const Cart = (props) => {
    // console.log(props)
    const {cart} =props;
    let totalQuantity = 0;

    let total =0;
    for(const product of cart){
        // product.quantity = !product.quantity ? 1: product.quantity
        if(!product.quantity){
            product.quantity=1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    // let shippingCost =0;
    // for(const product of cart){
    //     if(!product.quantity){
    //         product.quantity=1;
    //     }
    //     shippingCost = shippingCost + product.shipping * product.quantity;
    // };
    
    let shippingCost  = total > 0 ? 15 : 0;
    let tax = (total+shippingCost) * 0.10;
    let grandTotal =total +shippingCost +tax;
    return (
        <div>
             <h3>Order Sumrary</h3>

            <h4>Items ordered: {totalQuantity}</h4>
            <p>Total: {total.toFixed(2)}</p>
            <p>shipping Cost {shippingCost.toFixed(2)}</p>
            <p>Tax {tax.toFixed(2)}</p>         
            <h4>grand Total {grandTotal.toFixed(2)}</h4>         
        </div>
    )
};

export default Cart;