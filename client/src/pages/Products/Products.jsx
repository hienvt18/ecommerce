import "./product.css"
import { useEffect, useState } from "react"
import axios from "axios"
import Filter from "./Filter"
import Product from "./Product"
import Sort from "./Sort/Sort"
import Search from "./Search/Search"

const Products = () => { 
    const productsPerPage = 8
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ allProducts, setAllProducts ] = useState([])
    const [ selectedCategory, setSelectedCategory ] = useState("All")
    const [ activeCategory, setActiveCategory ] = useState("All");
    const [ searchKeyWord, setSearchKeyWord ] = useState("")
    const [ sortOption, setSortOption ] = useState("")

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axios.get("http://localhost:5050/api/product")
                setAllProducts(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getProduct()
    },[])

    const filteredProducts = allProducts.filter(
        (product) => selectedCategory === "All" || product.category === selectedCategory
    )

    const searchedProducts = filteredProducts.filter(
        (product) =>
            product.name.toLowerCase().includes(searchKeyWord.toLowerCase())
    )

    let sortedProducts = [...searchedProducts];
    if (sortOption === "increase") {
        sortedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortOption === "decrease") {
        sortedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    const totalPages = Math.ceil(allProducts.length / productsPerPage)

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    }

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    }

    return (
        <section className="wrapper">
            <div className="wrapper_container">
                <Filter setSelectedCategory={setSelectedCategory} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
                <section>
                    <div className="action">
                        <Search setSearchKeyWord={setSearchKeyWord}/>
                        <Sort setSortOption={setSortOption}/>
                    </div>
                    <div className="products_container">
                        {sortedProducts.slice(startIndex, endIndex).map(item => (
                            <Product key={item._id} product={item} />
                        ))}
                    </div>
                    <div className="pagination">
                        {currentPage > 1 && (
                            <button className="btn" onClick={handlePrevPage}>Previous</button>
                        )}
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                style={{padding: "10px", borderRadius: "5px", border: "1px solid #000", marginRight: "10px", cursor: "pointer" }}
                                key={index + 1}
                                onClick={() => setCurrentPage(index + 1)}
                                className={currentPage === index + 1 ? "active" : ""}
                            >
                                {index + 1}
                            </button>
                        ))}
                        {currentPage < totalPages && (
                            <button className="btn" onClick={handleNextPage}>Next</button>
                        )}
                    </div>
                </section>
            </div>
            
            
        </section>
    )
}

export default Products