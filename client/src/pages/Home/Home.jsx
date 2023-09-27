import Hero from "./Hero"
import Banner from "./Banner"
import Features from "./Features"
import Collections from "./Collections"
import Newsletters from "./Newsletters"

const Home = () => {
    return (
        <section>
            <Hero/>
            <Features/>
            <Collections/>
            <Banner/>
            <Newsletters/>
        </section>
    )
}

export default Home