const {User} = require('../model')
const jwt = require('jsonwebtoken')
require('dotenv').config()
module.exports = {
    async login({body: {email, password} },res) {
        try {
            const foundUser = await User.findOne({email})

            if(!foundUser){
                return res.status(403).send({
                    message: 'Такого пользователя нет'
                })
            }
            const isPasswordCorrect = foundUser.password === password
            if(!isPasswordCorrect){
                return res.status(403).send({
                    message: 'Такого пользователя нет'
                })
            }

            const accessToken = jwt.sign({
                UserId: foundUser._id,
                email: foundUser.email,
            },process.env.JWT_SECRET)

            const refreshToken = jwt.sign({
                UserId: foundUser._id,
                email: foundUser.email,
            },process.env.JWT_SECRET_REFRESH)

            return res.status(200).send({
                accessToken,
                refreshToken,
                foundUser
            })



        } catch (error){
            return res.status(403).send({
                message: 'Такого пользователя нет'
            })

        }
    }
}