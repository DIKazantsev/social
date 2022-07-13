
var express = require("express");
//var mysql = require('mysql');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const cors = require('cors')
var app = express();
app.use(cors());
var bodyParser = require("body-parser");
var path = require('path');
var statics = require('serve-static');
app.use(statics(path.join(__dirname, '/static/')));
app.use(statics(path.join(__dirname, '/../build')));
app.use(bodyParser.json({ limit: '10mb', extended: true }))
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '10mb'
}));




app.use((req, res) => {
  return res.end(
    `<!doctype html>
    <html>
    
    <head>
      <title>Social network</title>
    </head>
    
    <body>
        <div id="root"></div>
        <script src="bundle.js"></script>
    </body>
    
    </html>`
  )
});


app.listen(3000, () => {
  console.log('Сервер запущен на 3000 порту');
});
// app.listen(process.env.APP_PORT, process.env.APP_IP);
//app.listen(process.env.APP_PORT, process.env.APP_IP);
// console.log('Server running at http://%s:%s/', process.env.APP_IP, process.env.APP_PORT);
// console.log('Server running at http://%s:%s/', process.env.APP_IP, process.env.APP_PORT);