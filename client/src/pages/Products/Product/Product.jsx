import "../product.css"
import { addToCart } from "../../../redux/cartSlice"
import { AiFillStar } from "react-icons/ai"
import { FiShoppingCart } from "react-icons/fi"
import { useDispatch } from "react-redux"
import { toast } from 'react-toastify'
import { Link } from "react-router-dom"


const Product = ({product}) => {

    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addToCart(product))
        toast.success('Add Product', {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
    }

    return (
        <section className="product_container">
            <div className="product_items">
                <Link to={`${product.slug}`}>
                    <img src={product.image} alt="" />
                </Link>
                <div className="product_desc">
                    <h5>{product.name}</h5>
                    <div className="product_star">
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                    </div>
                </div>
                <div className="product_action">
                    <h4>$ ${product.price}</h4>
                    <button className="product_cart" onClick={handleAddToCart}>
                        <FiShoppingCart/>
                    </button>
                </div>
            </div>
    </section>
    )
}

export default Product