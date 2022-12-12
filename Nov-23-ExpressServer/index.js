const express = require('express');
// create an express app object by calling the express function
const app = express();
const PORT = 8080;

app.get('/', function (req, res){
    res.send('Hello, world!');
});

app.post('/home', function (req, res){
    res.send('Welcome Home!');
});

app.patch('/home', function (req, res){
    res.json({
        message: 'This is a patch request!',
        success: true,
    });
});

app.listen(PORT, function process(){
    console.log('Server started', PORT);
});
