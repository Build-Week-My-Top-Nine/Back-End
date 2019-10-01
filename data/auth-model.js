const db = require('./dbConfig.js')

module.exports = {
  register,
  login,
  findByregisterId
};

async function register(user) {
  const [id] = await db('mytopnineusers').insert(user);

  return findByregisterId(id);
}

function login(username) {
  return db('mytopnineusers').where({ username })
}

function findByregisterId(id) {
  return db('mytopnineusers')
    .where({ id })
    .first();
}