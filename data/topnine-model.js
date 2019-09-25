const db = require('./dbConfig.js')

module.exports = {
    add,
    find,
    findBy,
    findById,
    remove,
    update
  };
  
  function find() {
    return db('mytopnine')
  }
  
  function findBy(filter) {
    return db('mytopnine').where(filter);
  }
  
  async function add(topnine) {
    const [id] = await db('mytopnine').insert(topnine);
  
    return findById(id);
  }
  
  function findById(id) {
    return db('mytopnine')
      .where({ id })
      .first();
  }

  function remove(id){
    return db('mytopnine')
    .where('id', id)
    .del();
  }

  function update(id, changes) {
    return db('mytopnine')
      .where({ id })
      .update(changes);
  }