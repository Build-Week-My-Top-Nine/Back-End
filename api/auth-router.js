const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const db = require('../data/auth-model.js')
const router = express.Router()

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const user = await db.login(username).first()
  if (!username || !password) {
    res.status(401).json({ message: 'both username and password required' })
  } else if (user) {
    res.status(401).json({ message: 'The user name that you provided has been taken. Use different username!' })
  } else {
    const passwordhash = bcrypt.hashSync(password, 10)
    db.register({ username, password: passwordhash })
      .then(registerd => {
        const token = generateToken(registerd)
        const data = { ...registerd, token }
        res.status(200).json(data);
      })
      .catch(error => {
        res.status(500).json(error)
      })
  }

})

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.login(username)
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        const data = { id: user.id, username: user.username, token }
        res.status(200).json(data);
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
})

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const secret = 'hdsuf74jfjgksigjk222201'

  const options = {
    expiresIn: '1d',
  };

  return jwt.sign(payload, secret, options);
}

module.exports = router