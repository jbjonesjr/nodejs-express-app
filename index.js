const express = require('express')
const app = express()

var server_port = process.env.OPENSHIFT_NODEJS_PORT || process.env.EXPRESS_SERVER_PORT || 3000;

var html_frame = "<html>\
  <head>\
    <title>Basic express app</title>\
  </head>\
  <body>\
  </body>\
</html>";
app.get('/', function (req, res) {
  res.send('Welcome to this basic app! \
  You can now find this available on <a href="http://express-main.apps.ocp.test-demo-dlt.com/">OpenShift</a>');
})

app.listen(server_port, function () {
  console.log('Express app initiated and listening on port '+server_port+'!')
})
