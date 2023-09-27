const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")

const productRoute = require("./routes/Products")
const authRoute = require("./routes/Auth")

dotenv.config()
const app = express()

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(process.env.MONGODB_URL) 
        console.log('Database is running...')
    } catch(error) {
        console.log(error)
        process.exit()
    }
}

app.use(cors())
app.use(express.json())

// ROUTE
app.use("/api/product", productRoute)
app.use("/api/auth", authRoute)

app.listen(5050, () => {
    connectDB()
    console.log("Server is running...")
})