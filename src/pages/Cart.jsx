import React from 'react';
import { clearCart } from '../features/cart';
import { useSelector, useDispatch} from 'react-redux';
import CartItem from '../components/CartItem';

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    let totalPrice = 0;
    cart.forEach((item) => (totalPrice+= item.price*item.quantity));
    return (
       <>
        <div className="account-setting_content">
            <div className="account-setting_content_title">
                <h4>Product list in your cart</h4>
            </div>
            <div className="product-table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Title</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => (
                            <CartItem item={item} key={item.id}/>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        <h2 className='total-price'>Your total price will be ${totalPrice}</h2>
        <div className="mt-80">
            <button
                onClick={() => dispatch(clearCart())}
                type='button'
                className='btn-big'
            >
                Clear Cart
            </button>
        </div>
       </>
    );
};

export default Cart;