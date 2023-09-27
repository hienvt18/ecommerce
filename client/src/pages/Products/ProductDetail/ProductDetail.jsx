import { useParams } from "react-router-dom"
import "../product.css"
import { useEffect, useState } from "react"
import axios from "axios"

const ProductDetail = () => {

    const { slug } = useParams()
    const [ productDetail, setProdoctDetail ] = useState([])

    useEffect(() => {
        const showProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:5050/api/product/${slug}`)
                setProdoctDetail(res.data)
            } catch (error) {
                console.log(error)
            }
        } 
        showProduct()
    },[])
    


    return (
        <section className="detail_container">
            <div className="detail_wrapper">
                <div className="detail_left">
                    <img src={productDetail.image} alt="" />
                </div>
                <div className="detail_right">
                    <h2>{productDetail.name}</h2>
                    <p className="desc">{productDetail.description}</p>
                    <p className="price">$ {productDetail.price}</p>
                    <button className="btn_add">Add To Cart</button>
                </div>
            </div>
        </section>
    )
}

export default ProductDetail