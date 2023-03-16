const express = require('express')
const app = express()

require('dotenv').config()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

async function main() {

  app.get('/hello', (req, res) => {
    res.send('Hello world!')
  })

  const database = require('./database/database')
    const source = './database/db.sqlite'
    const db = await database.openOrCreateDB(source)

  const initial = require('./database/initial')
  await initial.createInitialTables(db)
  await initial.createInitialRows(db)

  const authentication = require('./authentication')
  await authentication.main(app, db)

  const path = require('path')
  app.use(express.static(path.join(__dirname, 'dist'))) 

  app.get('*', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html');
  })

  var history = require('connect-history-api-fallback')
  app.use(history())

  app.listen(process.env.PORT, () => {
    console.log('Express app listening on port', process.env.PORT)
  })

}
main()