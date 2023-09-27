import "./feature.css"
import f1 from "../../../assets/img/features/f1.png"
import f2 from "../../../assets/img/features/f2.png"
import f3 from "../../../assets/img/features/f3.png"
import f4 from "../../../assets/img/features/f4.png"

const data = [
    {
        id: 1,
        img: f1,
        name: "Free Shipping"
    },
    {
        id: 2,
        img: f2,
        name: "Online Order"
    },
    {
        id: 3,
        img: f3,
        name: "Save Money"
    },
    {
        id: 4,
        img: f4,
        name: "Promotions"
    },
]

const Features = () => {
    return (
        <section>
            <div className="feature_container">
                {data.map(item => (
                    <div key={item.id} className="feature_items">
                    <img src={item.img} alt={item.name} />
                    <p>{item.name}</p>
                </div>
                ))}
            </div>
        </section>
    )
}

export default Features