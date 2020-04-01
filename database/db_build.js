const fs = require('fs')
const dbQuery = require('./db_query')
const sql = fs.readFileSync(`${__dirname}/db_schema.sql`).toString()

dbQuery(sql, (err, res) => {
  if (err) {
    console.log(err)
  } else {
    console.log(res)
  }
})