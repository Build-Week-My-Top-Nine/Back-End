const request = require('supertest'); 
const bcrypt = require('bcryptjs');
const userdb = require('../data/auth-model.js')
const db = require('../data/topnine-model.js')
const server = require('../server.js'); 
const jwt = require('jsonwebtoken')

describe('server.js', () => {
  describe('Post /api/auth/register ', () => {
       const req = {username:'teddy3', password:'1233'}
       req.password = bcrypt.hashSync(req.password, 6)
    xit('should return an OK status code 200', async () => {
       request(server).post('/api/auth/register')
          userdb.add(req)
      .then(res=>{
           
           expect(res.body.status).toBe(200);
      });
    })

    xit('should return the correct object', async () => {
      request(server).post('/api/auth/register')
        userdb.add(req)
    .then(res=>{
          
          expect(res.type).toBe('application/json');
    })
     
    })

  })

  describe('Post /api/auth/login ', () => {
    const req = {username:'sam', password:'123'}
    req.password = bcrypt.hashSync(req.password, 6)
    it('should return an OK status code 200', async () => {
    request(server).post('/api/auth/login')
    await userdb.findBy({ username: 'sam' })
    .first()
    .then(user=>{
      if (user && bcrypt.compareSync(req.password, user.password)) {
        expect(res.body.status).toBe(200);
      }
        
     });
    })
 
    it('should return the correct object', async () => {
    request(server).post('/api/auth/login')
    await userdb.findBy({ username: 'teddy1' })
    .first()
    .then(user=>{
      if (user && bcrypt.compareSync(req.password, user.password)) {
        expect(res.type).toBe('application/json');
      }
       
 })
  
 })

})

describe('Get /api/topenine ', () => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6IlNhbSIsImlhdCI6MTU2OTU0Njc3NiwiZXhwIjoxNTY5NjMzMTc2fQ.acWqFEJLsVscVmzU1oSPgDG8aTLiaW_jOiqZyLBgbuk"
  const secret = 'hdsuf74jfjgksigjk222201'
  
  it('should return an OK status code 200', async () => {
  request(server).post('/api/topnine')
  jwt.verify(token, secret, (err,decodedToken)=>{
    db.findBy({username:'sam'})
    .then(user=>{
      expect(res.body.status).toBe(200);
    })
    
    })
      
    });
  })

})