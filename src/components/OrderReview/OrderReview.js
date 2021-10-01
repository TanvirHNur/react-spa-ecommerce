import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/UseCart'
import Cart from '../Cart/Cart'
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteFromDb } from '../../utilities/fakedb';

const OrderReview = () => {
    const [products,setProducts]=useProducts();
    const [cart,setCart]=useCart(products);
    const handleRemove=key=>{
        const newCart=cart.filter(product=> product.key !==key);
        setCart(newCart);
        deleteFromDb(key)
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
            <Cart cart={cart}></Cart>
                </div>

            
        </div>
    );
};

export default OrderReview;