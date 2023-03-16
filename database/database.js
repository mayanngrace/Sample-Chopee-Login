//Default Code for Database

const sqlite3 = require('sqlite3').verbose()

async function openOrCreateDB(source) {
  return new Promise(async (resolve, reject) => {
    try {
      const db = new sqlite3.Database(source, (err) => {
        if (err) {
          throw err
        } else {
          resolve(db)
        }
      })
    } catch (error) {
      console.log('Error opening/creating database', source, 'in database.js') 
      console.log(error) 
      reject()
    }
  })
}

async function createTable(db, tableName, columns) {
  return new Promise(async (resolve, reject) => {
    try {
      db.run(`CREATE TABLE IF NOT EXISTS ${tableName} (${columns})`, (err) => {
        if (err) {
          throw err
        } else {
          resolve()
        }
      })
    } catch (error) {
      console.log('Error on database.js > createTable') 
      console.log(error) 
      reject()
    }
  })
}

async function run(db, sql, params, ignoreErrs) {
  return new Promise(async (resolve, reject) => {
    db.run(sql, params, (err) => {
      if (err) {
        if (ignoreErrs) {
          resolve()
        } else {
          reject(err)
        }
      } else {
        resolve()
      }
    })
  })
}

async function get(db, sql, params, ignoreErrs) {
  return new Promise(async (resolve, reject) => {
    db.get(sql, params, (err, row) => {
      if (err) {
        if (ignoreErrs) {
          resolve()
        } else {
          reject(err)
        }
      } else {
        resolve(row)
      }
    })
  })
}

async function all(db, sql, params, ignoreErrs) {
  return new Promise(async (resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) {
        if (ignoreErrs) {
          resolve()
        } else {
          reject(err)
        }
      } else {
        resolve(rows)
      }
    })
  })
}

module.exports = {openOrCreateDB, createTable, run, get, all}