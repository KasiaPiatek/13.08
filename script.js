var http = require('http');
var server = http.createServer();
var fs = require('fs');

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/hello') {
            fs.readFile('index.html', function(err, html) {
        		response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
       			response.write(html);
        		response.end();
	}
	)}
    else  {
            response.writeHead(404, {"Content-type":"image/jpg"});
    
            response.end();
    }
});

server.listen(8080);