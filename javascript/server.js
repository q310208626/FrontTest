var http = require('http');
http.createServer(function(request ,response){
    response.setHeader('Content-Type','text/plan');
    response.statusCode = '200';
    response.statusMessage = 'Hello,This is first NodeJS!';
    response.end(response.statusMessage);
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/')
