//Load express module with `require` directive
var express = require('express')
var app = express()
//Define port
var port = 9000
//Define request response in root URL (/)
app.get('/', function (req, res) {
    res.send('cicd is coolio my dude')
})
//Launch listening server on port 9000
app.listen(port, function () {
    console.log('this is project2 listening on port ${port}!')
})