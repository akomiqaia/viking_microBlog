const db = require('./database/conect')

function getUsers() {
  return db.query("SELECT * FROM users")
          .then(result => result.rows)
          .catch(err => console.error(err));
}

module.exports = { getUsers }