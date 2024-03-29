Aplicando certificado **SSL** utilizando **Node.js**.

#### Crie um arquivo app.js e adicione o código abaixo.

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello, world');
});


server.listen(() => {
    console.log(`http://localhost/`);
});
```

#### Execute o código utilizando em seu terminal o comando 

node app.js

#### Verifique em seu navegador o note aplicado com Hello, World. Todavia não haverá o certificado ainda.

#### Em sequência o primeiro passo é a criação do certificado local SSL com o comando.

openssl req -x509 -newkey rsa:4096 -nodes -out cert.pem -keyout key.pem -days 365

#### Com o certificado e chave criada, agora execute o código node abaixo em seu app.js.



```javascript
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
```

#### Após fazer a execução do note vá até o navegador e confira o certificado aplicado.