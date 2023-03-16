//Initial Table

const { v4: uuidv4 } = require('uuid')
const database = require('./database')
const bcrypt = require('bcrypt')

async function createInitialTables(db) {
  await database.createTable(db, 'user', `
    id TEXT UNIQUE PRIMARY KEY,
    role TEXT,
    username TEXT UNIQUE,
    password TEXT
  `,)
}

async function createInitialRows(db) {
    var hashedPassword = await bcrypt.hash('1234', 10)
    await database.run(db, `
      INSERT INTO user (
        id, role, username, password
      ) VALUES (
        ?, ?, ?, ?
      )
    `, [
      uuidv4(), 'user', '1234', hashedPassword
    ], true)
}

module.exports = {createInitialTables, createInitialRows}
