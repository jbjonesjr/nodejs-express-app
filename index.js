const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Welcome to this basic app!')
})

app.listen(3000, function () {
  console.log('Express app initiated and listening on port 3000!')
})
