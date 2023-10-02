import "./rootlayout.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet, useLocation } from "react-router-dom"
import Header from "../Header/"
import Footer from "../Footer/"
import { AnimatePresence } from "framer-motion";



const RootLayout = () => {
    const location = useLocation()

    const hide = location.pathname === "/login" || location.pathname === "/signup"

    return (
        <AnimatePresence>
            <div className="root">
                {!hide && <Header/>}
                <main>
                    <Outlet/>
                </main>
                {!hide && <Footer/>}
            </div>
            <ToastContainer/>
        </AnimatePresence>   
    )
}

export default RootLayout