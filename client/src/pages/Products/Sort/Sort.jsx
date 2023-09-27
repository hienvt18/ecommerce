import "./sort.css"

const Sort = ({setSortOption}) => {
    return (
        <section className="sort">
            <div className="sort_content">
                Sort:
                <select name="sort" onChange={(e) => setSortOption(e.target.value)}>
                    <option value=""></option>
                    <option value="increase">Increase</option>
                    <option value="decrease">Decrease</option>
                </select>
            </div>
        </section>
    )
}

export default Sort