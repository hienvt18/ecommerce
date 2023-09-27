import CartList from "./CartList"
import "./cart.css"
import { Link } from "react-router-dom"

const Cart = () => {
    return (
        <section className="cart_container">
            <div className="cart_top">
                <h1>Your Carts</h1>
                <Link to="/shop" className="cart_link">Continue shop</Link>
            </div>
            <CartList/>
        </section>
    )
}

export default Cart