// using http module (inbuilt given by node) we can setup a basic server
const http = require('http');
const PORT = 8080;
/*
* Http module contains a function called as createServer
* this creatServer function takes a callback as the input
* Now inside the callback, we get two arguments
* - request --> this argument contains all the details about the incomming req
* - response --> this argument contains the functions which we can prepare the response
* the creatServer function returns us the server object


*/

const server = http.createServer( function exec(request, response){
    console.log(request.method);
    if(request.url == '/home'){
        response.end('Welcome Home');

    }else if(request.url == '/faq'){
        response.end('List of FAQs');
    }else{
        response.end('Hello, world!');
    }


});

server.listen(PORT, function process(){
    // Once the server has started then the callback will be executed
    console.log('Server started on this port ', PORT);
});
