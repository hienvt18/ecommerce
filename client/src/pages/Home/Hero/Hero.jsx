import "./hero.css"
import { Link } from "react-router-dom"
import Banner from "../../../assets/img/hero.png"

const Hero = () => {
    return (
        <section>
        <img className="hero_img" src={Banner} alt="" />
        <div className="hero_content">
            <h1 className="hero_title">On all products</h1>
            <p className="hero_text">Save more with coupons & up to 70% off !</p>
            <Link to="/shop">
                <button className="hero_btn">Shop Now</button>
            </Link>
        </div>
    </section>
    )
}

export default Hero