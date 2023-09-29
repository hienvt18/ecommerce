import "./header.css"
import logo from "../../assets/img/logo.png"
import avatar from "../../assets/img/avatarUser.jpg"
import { useState } from "react"
import { Link } from "react-router-dom"
import { BiUserCircle } from "react-icons/bi"
import { FiShoppingCart } from "react-icons/fi"
import { AiOutlineMenu, AiOutlineClose, AiOutlineLogout } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"  
import { motion } from "framer-motion" 
import { logout } from "../../redux/authSlice"

const Header = () => {
    const dispatch = useDispatch()
    const [ isOpen, setIsOpen ] = useState(false)
    const [ settingAccount, setSettingAccount ] = useState(false)
    const cartList = useSelector(state => state.cart.cartItems)
    const user = useSelector(state => state.auth.login.currentUser)

    const handleLogOut = () => {
        dispatch(logout())
    }

    return (
        <header>
            <div className="header-container">
                <Link to="/" className="header_left">
                    <img className="header_logo" src={logo} alt="logo" />
                </Link>
                <div className="header_right">
                    <nav className="header_nav">
                        <Link className="header_navlink" to="/">Home</Link>
                        <Link className="header_navlink" to="/shop">Shop</Link>
                        <Link className="header_navlink" to="/contact">Contact</Link>
                        <Link className="header_navlink" to="/blog">Blog</Link>
                    </nav>
                    <div className="header_action">
                        {user !== null ? (
                            <div className="header_account">
                                <motion.img whileTap={{scale: 0.6}} onClick={() => setSettingAccount(!settingAccount)} className="avatar" src={avatar} alt="avatar" />
                                {settingAccount && (
                                    <ul>
                                        <li onClick={handleLogOut}><AiOutlineLogout/>Log Out</li>
                                    </ul>
                                )}  
                            </div>
                        ) : (
                            <>
                                <Link className="header_login" to="/login">
                                <BiUserCircle/>    
                                </Link>
                            </>
                        )}
                        <Link className="header_cart" to="/cart">
                            <FiShoppingCart/>
                            <span className="header_quantity">{cartList.length}</span>    
                        </Link>
                        <div onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? (
                                <AiOutlineClose className="header_dropMenu"/>
                            ): (
                                <AiOutlineMenu className="header_dropMenu"/>
                            )}
                        </div>
                    </div>  
                </div>

                {/* Menu mobile */}
                {isOpen && (
                    <div className="header_showMenu" onClick={() => setIsOpen(false)}>
                        <nav className="header_navMobile">
                            <Link className="header_navlinkMobile" to="/">Home</Link>
                            <Link className="header_navlinkMobile" to="/shop">Shop</Link>
                            <Link className="header_navlinkMobile" to="/contact">Contact</Link>
                            <Link className="header_navlinkMobile" to="/blog">Blog</Link>
                        </nav>
                    </div>
                        
                )}
            </div>
        </header>
    )
}

export default Header