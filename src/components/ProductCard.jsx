import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart';
 
const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
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
                    onClick={() => {dispatch(addToCart(product))}} className='btn-white'>
                        ADD TO CART
                    </button>
            </div>
        </div>
    );
};

export default ProductCard;