import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCartCount,
  finalTotal,
  NewMenu,
  removeFromCart,
} from "../CartReducer/Slice";

export const CartPage = () => {
  const cart = useSelector((state: any) => state.cart);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    dispatch(finalTotal());
  }, [cart, dispatch]);

  const handleRemoveCartItem = (item: NewMenu) => {
    dispatch(removeFromCart(item));
  };

  const handleDecreaseCartItem = (item: NewMenu) => {
    dispatch(decreaseCartCount(item));
  };
  const handleAddCartItem = (item: NewMenu) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.cartItem.length === 0 ? (
        <div className="empty-cart-container">
          <p>Your cart is currently empty</p>
          <div className="empty-cart detail">
            <Link className="back-link" to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>Buy Delicious Food</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="title">
            <h3 className="item-product">Product</h3>
            <h3 className="item-price">Price</h3>
            <h3 className="item-quantity">Quantity</h3>
            <h3 className="item-total">Total</h3>
          </div>
          <div>
            {cart.cartItem.map((item: NewMenu) => {
              const { id, title, img, price, cartQuantity } = item;

              return (
                <div key={id} className="cart-food-container">
                  <div className="cart-food-detail">
                    <img src={img} alt={title} />
                    <div className="cart-food-title">
                      <h3>{item?.title}</h3>
                      <button onClick={() => handleRemoveCartItem(item)}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart-food-price"> $ {price} </div>
                  <div className="cart-total-quantity">
                    <button onClick={() => handleDecreaseCartItem(item)}>
                      -
                    </button>
                    <div className="count">{cartQuantity}</div>
                    <button onClick={() => handleAddCartItem(item)}>+</button>
                  </div>
                  <div className="cart-final-price">
                    $ {(price * cartQuantity).toFixed(2)}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-summary">
            <button className="clear-cart" onClick={() => handleClearCart()}>
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <p>Subtotal</p>
                <span className="amount">$ {cart.totalPrice.toFixed(2)}</span>
              </div>
              <button>Checkout</button>
              <p>Taxes and Shipping Calculate at checkout</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
