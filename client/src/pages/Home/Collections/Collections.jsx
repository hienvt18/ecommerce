import "./collection.css"
import { Link } from "react-router-dom"
import { AiFillStar } from "react-icons/ai"
import { FiShoppingCart } from "react-icons/fi"
import p1 from "../../../assets/img/products/f1.jpg"
import p2 from "../../../assets/img/products/f2.jpg"
import p3 from "../../../assets/img/products/f3.jpg"
import p4 from "../../../assets/img/products/f4.jpg"


const data = [
    {
        id: 1,
        img: p1,
        brand: "adidas",
        name: "Cartoon Astronaut T-Shirts",
        price: "78"
    },
    {
        id: 2,
        img: p2,
        brand: "nike",
        name: "Cartoon Astronaut T-Shirts",
        price: "80"
    },
    {
        id: 3,
        img: p3,
        brand: "puma",
        name: "Cartoon Astronaut T-Shirts",
        price: "55"
    },
    {
        id: 4,
        img: p4,
        brand: "joma",
        name: "Cartoon Astronaut T-Shirts",
        price: "99"
    },
]



const Collections = () => {
    return (
        <section className="collection_container">
            <div className="collection_top">
                <h2 className="collection_title">Featured Products</h2>
                <p className="collection_text">Summer Collection New Morden Design</p>
            </div>
            <div className="collection_bottom">
                {data.map(item => (
                    <div key={item.id} className="collection_items">
                        <img src={item.img} alt="" />
                        <div className="collection_desc">
                            <span>{item.brand}</span>
                            <h5>{item.name}</h5>
                            <div className="collection_star">
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                            </div>
                        </div>
                        <div className="collection_action">
                            <h4>$ {item.price}</h4>
                            <Link className="collection_cart" to="/cart">
                                <FiShoppingCart/>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Collections