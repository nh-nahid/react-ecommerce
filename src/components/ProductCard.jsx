import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className='ingredient'>
            <div className="ingredient_image">
                <figure>
                    <img src={product.image} alt="product.title" />
                </figure>
            </div>
            <div className="ingredient_title">
                <h3>{product.title}</h3>
            </div>
            <div className="ingredient_content">
                <p>
                    <span>${product.price}</span>
                </p>
            </div>
            <div className="ingredient_btn">
                <button
                    onClick={(e) => {}} className='btn-white'>
                        ADD TO CART
                    </button>
            </div>
        </div>
    );
};

export default ProductCard;