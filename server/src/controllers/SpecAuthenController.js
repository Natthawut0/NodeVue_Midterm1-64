const { Spec } = require('../PortableMonitor')
const config = require('../config/config')
const jwt = require('jsonwebtoken')

function jwtSignSpec(spec) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(spec, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async register(req, res) {
        try {
            const spec = await Spec.create(req.body)
            res.send(spec.toJSON())
        } catch (error) {
            res.status(400).send({
                error: 'The content information was incorrect'
            })
        }
    },
    
    async login(req, res) {
        try {
            const { email, password } = req.body
            const spec = await Spec.findOne({
                where: {
                    email: email
                }
            })
            if (!spec) {
                return res.status(403).send({
                    error: 'Spec/Password not correct'
                })
            }
            const isPasswordValid = await spec.comparePassword(password)
            if (!isPasswordValid) {
                return res.status(403).send({
                    error: 'Spec/Password not correct'
                })
            }
            const specJSON = spec.toJSON()
            res.send({
                spec: specJSON,
                token: jwtSignSpec(specJSON)
            })
        } catch (error) {
            res.status(500).send({
                error: 'Error! from get spec'
            })
        }
    }
}