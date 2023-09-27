import "./cart.css"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { removeCart, increaseQuantity, decreaseQuantity } from "../../redux/cartSlice"

const CartList = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.cartItems)

    const handleIncrease = (item) => {
        dispatch(increaseQuantity(item._id))
    }

    const handleDecrease = (item) => {
        dispatch(decreaseQuantity(item._id))
    }

    const handleRemoveItem = (item) => {
        dispatch(removeCart(item._id))
    }

    return (
        <section className="cartList_container">
            {cartItems.length > 0 ? (
                <>
                    <div className="cart_table">
                        <div className="cart_titles">
                            <h3 className="cart_title">Product</h3>
                            <h3 className="cart_price">Price</h3>
                            <h3 className="cart_quantity">Quantity</h3>
                        </div>  
                        <div className="cart_item">
                            {cartItems.map(item => (
                                <div key={item._id} className="cart_items">
                                <div className="cart_product">
                                    <img className="cart_images" src={item.image} alt="" />
                                    <div>
                                        <h3 className="cart_name">{item.name}</h3>
                                    </div>
                                </div>
                                <div className="cart_pprice">$ {item.price}</div>
                                <div className="cart_pquantity">
                                    <button className="btn" onClick={() => handleDecrease(item)}>-</button>
                                    <div className="cart_count">{item.quantity}</div>
                                    <button className="btn" onClick={() => handleIncrease(item)}>+</button>
                                </div>
                                <button className="btn_remove" onClick={() => handleRemoveItem(item)}>Remove</button>
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className="cart_sumary">
                        <div className="cart_checkout">
                            <div className="cart_subtotal">
                                <span>Subtotal</span>
                                <span className="cart_amount">$ {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</span>
                            </div>
                            <Link to="/checkout" className="btn_checkout">Check Out</Link>
                        </div>
                    </div>
                </>
            ) : (<p className="warning">Item is already added to your cart</p>)}
        </section>
    )
}

export default CartList