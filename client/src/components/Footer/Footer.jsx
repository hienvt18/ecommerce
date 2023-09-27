import "./footer.css"
import logo from "../../assets/img/logo.png"
import app from "../../assets/img/pay/app.jpg"
import play from "../../assets/img/pay/play.jpg"
import pay from "../../assets/img/pay/pay.png"
import { BiLogoFacebook, BiLogoTwitter,  BiLogoInstagram, BiLogoYoutube} from "react-icons/bi"

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer_container">
                <div className="footer_left">
                    <img src={logo} alt="" />
                    <h5>Contact</h5>
                    <p><strong>Address:</strong> 123 Distric 1, Ho Chi Minh City</p>
                    <p><strong>Phone:</strong> +84 123456789</p>
                    <p><strong>Hours:</strong> 10:00 - 18:00, Mon-Sat</p>
                    <div className="footer_social">
                        <h5>Follow us</h5>
                        <BiLogoFacebook className="footer_Icon"/>
                        <BiLogoTwitter className="footer_Icon"/>
                        <BiLogoInstagram className="footer_Icon"/>
                        <BiLogoYoutube className="footer_Icon"/>
                    </div>
                </div>
                <div className="footer_right">
                    <div className="footer_about">
                        <h5>About</h5>
                        <ul>
                            <li>About us</li>
                            <li>Delivery</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="footer_myAccount">
                        <h5>My Account</h5>
                        <ul>
                            <li>Sign In</li>
                            <li>View Cart</li>
                            <li>My Wishlist</li>
                            <li>Track My Order</li>
                            <li>Help</li>
                        </ul>
                    </div>
                    <div className="footer_installApp">
                        <h5>Install App</h5>
                        <p>From App Store or Google Play</p>
                        <div className="footer_row">
                            <img src={app} alt="" />
                            <img src={play} alt="" />
                        </div>
                        <p>Secured Payment Gateways</p>
                        <img className="footer_pay" src={pay} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer