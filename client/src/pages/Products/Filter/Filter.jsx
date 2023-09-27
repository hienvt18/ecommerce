import "./filter.css"

const Filter = ({setSelectedCategory, activeCategory, setActiveCategory}) => {


    return (    
        <section className="filter">
                <div className="filter_category">
                    <h2>Category</h2>
                    <ul className="filter_list">
                        <li className={`filter_link ${activeCategory === "All" ? "active" : ""}`} onClick={() => {
                            setSelectedCategory("All");
                            setActiveCategory("All");
                        }}>All</li>
                        <li className={`filter_link ${activeCategory === "Nike" ? "active" : ""}`} onClick={() => {
                            setSelectedCategory("Nike");
                            setActiveCategory("Nike");
                        }}>Nike</li>
                        <li className={`filter_link ${activeCategory === "Puma" ? "active" : ""}`} onClick={() => {
                            setSelectedCategory("Puma");
                            setActiveCategory("Puma");
                        }}>Puma</li>
                        <li className={`filter_link ${activeCategory === "Adidas" ? "active" : ""}`} onClick={() => {
                            setSelectedCategory("Adidas");
                            setActiveCategory("Adidas");
                        }}>Adidas</li>
                    </ul>
                </div>
        </section>
    )
}

export default Filter