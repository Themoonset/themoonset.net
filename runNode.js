const http = require('http');
const fs = require('fs');

const hostname = 'themoonset.net';
const port = 3000;

const server = http.createServer((req, res) => {
    function serve(pathToFile) {
        fs.readFile(pathToFile, (err, data) => {
            if (err) {
                console.logg(err);
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
    }
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
