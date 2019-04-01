var http = require('http'), 
	fs = require('fs'),
	port = process.argv[2],
	finalhandler = require('finalhandler'), 
	serveStatic = require('serve-static'),
	serve = serveStatic(".");

http.createServer(function(req, res) {

	console.log("__dirname------" , __dirname);
	if(req.url.lastIndexOf("/site") >=0) {
		res.writeHead(200, {"Content-Type" : "text/html"});
		///Users/virbhadrasinh/Vir/Personal/Vir
		res.end(fs.readFileSync(__dirname + "/site.html"));
	}else {
		var done = finalhandler(req, res);
		serve(req, res, done);
	}
}).listen(port);