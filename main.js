var http = require("http");
const { type } = require("os");
var message = process.env.message;

http.createServer(function(request, response){

response.writeHead(200, {'content-type':'text/plain'})
response.end('hello world with message' + message + '\n')
}).listen(8081);

console.log('server started at port 8081')