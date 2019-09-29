const jwt = require('jsonwebtoken')

function restriction(req, res, next) {
    const token = req.headers.authorization
    const secret = 'hdsuf74jfjgksigjk222201'
    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            if (err) {
                res.status(403).json({ message: 'Invalid Credentials' })
            } else {
                req.decodedToken = decodedToken
                next()
            }
        })
    } else {
        res.status(403).json({ message: 'Provide the Correct Credential' })
    }

}

module.exports = restriction