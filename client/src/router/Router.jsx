import { createBrowserRouter } from "react-router-dom"
import RootLayout from "../components/RootLayout"
import Home from "../pages/Home"
import Products from "../pages/Products"
import Login from "../pages/Login"
import Signup from "../pages/SignUp"
import Cart from "../pages/Cart"
import CheckOut from "../pages/CheckOut"
import ProductDetail from "../pages/Products/ProductDetail"

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/shop",
                element: <Products/>
            },
            {
                path: "/shop/:slug",
                element: <ProductDetail/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/signup",
                element: <Signup/>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/checkout-success",
                element: <CheckOut/>
            },
        ]
    }
])

export default router