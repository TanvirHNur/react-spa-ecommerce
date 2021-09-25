import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating'

const Product = (props) => {
    // console.log(props)
    const {name, price, seller, img, stock, star} = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <div>
            <img src={img} alt=""></img>

            </div>
            <div className="details">
            <h4 className="product-name">{name.slice(0,50)}</h4>
            <p>Vendor {seller}</p>
            <p>only {stock} left in stock - order soon</p>
            <Rating className="rating"
            initialRating={star}
             emptySymbol="far fa-star"
             fullSymbol="fas fa-star"
            readonly></Rating>
            <h5>${price}</h5>
            <button
            onClick={ () =>props.handleAddToCart(props.product)}
            className="regular-btn">{element} Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;