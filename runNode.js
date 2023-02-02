const http = require('http');
const fs = require('fs');

const hostname = 'themoonset.net';
const port = 3000;
var express = require('express');
var app = express();

const server = http.createServer((req, res) => {
    function serve(pathToFile) {
        fs.readFile(pathToFile, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.end(data);
            }
        });
    }

    switch (req.url) {
        case '/': {
            serve('index.html');
            break;
        }
        case '/about': {
            serve('about.html');
            break;
        }
        case '/script.js': {
            serve('script.js');
            break;
        }
        case '/images': {
            app.use(express.static(__dirname + '/images'));
            break;
        }
	/*case '/github.php':{
    		serve('github.php');
		break;
	}*/
        case '/api': {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                product_id: "xyz12u3",
                product_name: "NginX injector",
            })
        );
        }
    }
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
