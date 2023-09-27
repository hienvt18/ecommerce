import "./search.css"

const Search = ({setSearchKeyWord}) => {
    return (
        <section>
            <input type="text" placeholder="Seach product..." className="search" onChange={(e) => setSearchKeyWord(e.target.value)} />
        </section>
    )
}

export default Search