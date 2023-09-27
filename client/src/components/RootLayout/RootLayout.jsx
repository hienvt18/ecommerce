import "./rootlayout.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from "react-router-dom"
import Header from "../Header/"
import Footer from "../Footer/"
import { AnimatePresence } from "framer-motion";



const RootLayout = () => {
    return (
        <AnimatePresence>
            <div className="root">
                <Header/>
                <main>
                    <Outlet/>
                </main>
                <Footer/>
            </div>
            <ToastContainer/>
        </AnimatePresence>   
    )
}

export default RootLayout