import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemoveItem = key => {
        //Remove From UI
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        //Remove From LocalStorage
        removeFromDb(key);
    }
    return (
        <div className="container">
            <div className="shop-container">
                <div className="product-container">
                    {
                        cart.map(product => <ReviewItem 
                            key={product.key} 
                            product={product} 
                            handleRemoveItem={handleRemoveItem}
                            />)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                    <div>
                        <h2>Order Review Para</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;