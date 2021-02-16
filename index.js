//Load express module with `require` directive
var express = require('express')
var app = express()
//Define port
var port = 9000
//Define request response in root URL (/)
app.get('/', function (req, res) {
    res.send('this website should relay information from project 2')
})
//Launch listening server on port 3000
app.listen(port, function () {
    console.log('app listening on port ${port}!')
})