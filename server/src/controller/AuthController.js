const User = require("../models/User")
const bcrypt = require("bcryptjs")

const authController = {
    // Register
    register: async (req, res) => {
        try {
            const salt = await bcrypt.genSalt(10)
            const hashed = await bcrypt.hash(req.body.password, salt)

            // Create User
            const newUser = await new User({
                username: req.body.username,
                email: req.body.email,
                password: hashed
            })

            // Save
            const user = await newUser.save()
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    login: async (req, res) => {
        try {
            const user = await User.findOne({username: req.body.username})
            
            if (!user) return res.status(404).json("Wrong username !")

            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            )

            if(!validPassword) {
                req.status(404).json("Wrong password!")
            }

            if (user && validPassword) {
                const { password, ...others } = user._doc
                res.status(200).json({others})
            }

        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = authController