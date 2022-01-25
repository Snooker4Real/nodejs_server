const http = require("http");

// Create server
const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});

    res.write('<!DOCTYPE html>' +
        '<html>' +
        '    <head>' +
        '        <meta charset="utf-8" />' +
        '        <title>Mon app Node.js !</title>' +
        '    </head>' +
        '    <body>' +
        '         <p>Mon premier paragraphe <strong>HTML</strong> renvoyé !</p>' +
        '    </body>' +
        '</html>');

    res.end();
});

server.listen(8080, () => {
    console.log("Serveur démarré sur le port 8080");
});
