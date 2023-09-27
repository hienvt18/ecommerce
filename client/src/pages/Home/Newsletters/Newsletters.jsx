import "./newsletters.css"

const Newsletters = () => {
    return (
        <section>
            <div className="newsletters_container">
                <div className="newsletters_content">
                    <div className="newsletters_items">
                        <h5>Sign Up For Newsletters</h5>
                        <p>Get E-mail updates about out latest shop and <span>special offers</span></p>
                    </div>
                    <div className="newsletters_items">
                        <input type="text" placeholder="Your email address..." />
                        <button>Sign Up</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletters