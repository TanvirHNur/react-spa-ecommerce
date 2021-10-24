import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/UseCart'
import Cart from '../Cart/Cart'
import ReviewItem from '../ReviewItem/ReviewItem';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';

const OrderReview = () => {
    const [products,setProducts]=useProducts();
    const [cart,setCart]=useCart(products);    
    const history=useHistory();

    const handleRemove=key=>{
        const newCart=cart.filter(product=> product.key !==key);
        setCart(newCart);
        deleteFromDb(key)
    }

    const handlePlaceOrder=()=>{
        history.push('/shipping');
        // setCart([])
        // clearTheCart()
    }

    return (
        <div className="shop-container">
                <div className="product-container">
                    {
                        cart.map(product=> <ReviewItem product={product}
                        key={product.key}
                        handleRemove={handleRemove}
                        ></ReviewItem>)
                    }
                </div>
                <div className="cart-container">
            <Cart cart={cart}>
                <button onClick={handlePlaceOrder} className="regular-btn">Proced to shipping</button>
            </Cart>
                </div>

            
        </div>
    );
};

export default OrderReview;