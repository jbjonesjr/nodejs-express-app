const express = require('express')
const app = express()

var server_port = process.env.OPENSHIFT_NODEJS_PORT || process.env.EXPRESS_SERVER_PORT || 3000;

app.get('/', function (req, res) {
  res.send('Welcome to this basic app!')
})

app.listen(server_port, function () {
  console.log('Express app initiated and listening on port '+server_port+'!')
})
