/*const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello, world');
});


server.listen(() => {
    console.log(`http://localhost/`);
}); */

const https = require('https');
const fs = require('fs');
const os = require('os');

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

const server = https.createServer(options, (req, res) => {
    res.writeHead(200);
    res.end('Hello, world');
});

const PORT = 8080;

server.listen(PORT, () => {
    console.log(`https://localhost:${PORT}`);
});