const request = require('supertest');
const bcrypt = require('bcryptjs');
const userdb = require('../data/auth-model.js')
const db = require('../data/topnine-model.js')
const server = require('../server.js');
const jwt = require('jsonwebtoken')

//testing the register API
describe('server.js', () => {
  describe('Post /api/auth/register', () => {
    const req = { username: 'teddy4', password: '1233' }
    req.password = bcrypt.hashSync(req.password, 10)
    xit('should return an OK status code 200', async () => {
      request(server).post('/api/auth/register')
      userdb.register(req)
        .then(res => {

          expect(res.body.status).toBe(200);
        });
    })

    xit('should return the correct object', async () => {
      request(server).post('/api/auth/register')
      userdb.register(req)
        .then(res => {

          expect(res.type).toBe('application/json');
        })

    })

  })

  // testing the loin API

  describe('Post /api/auth/login', () => {
    const req = { username: 'sam', password: '123' }
    req.password = bcrypt.hashSync(req.password, 10)
    it('should return an OK status code 200', async () => {
      request(server).post('/api/auth/login')
      await userdb.login(req.username)
        .first()
        .then(user => {
          if (user && bcrypt.compareSync(req.password, user.password)) {
            expect(res.body.status).toBe(200);
          }

        });
    })

    it('should return the correct object', async () => {
      request(server).post('/api/auth/login')
      await userdb.login(req.username)
        .first()
        .then(user => {
          if (user && bcrypt.compareSync(req.password, user.password)) {
            expect(res.type).toBe('application/json');
          }

        })

    })

  })

  //testing the get api for the top nine items based on the user name

  describe('Get /api/topenine ', () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6IlNhbSIsImlhdCI6MTU2OTc4MTA1NCwiZXhwIjoxNTY5ODY3NDU0fQ.YwoWZMCOX7tugsAYAsf2z5aE0facybduRp36XELkLXc"
    const secret = 'hdsuf74jfjgksigjk222201'

    it('should return an OK status code 200', async () => {
      request(server).get('/api/topnine')
      jwt.verify(token, secret, (err, decodedToken) => {
        const user = decodedToken.username
        db.findBy({ username: user })
          .then(user => {
            expect(res.body.status).toBe(200);
          })

      })

    });
  })

  describe('POST /api/topenine ', () => {
    const req = { UserName: "teddy", Rank: "2", TopNineItem: "Orange", Category: "Firut" }
    it('should return an OK status code 201', async () => {
      request(server).post('/api/topnine')
      db.add(req)
        .then(posted => {
          res.status(201).json(posted)

        })

    });
  })


})