const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    //set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = '';
    switch(req.url) {
        case '/':
            path += 'index.html';
            break;
        case '/landing':
            path += 'landing.html';
            break;
          default:
            path += '404.html';
          break;
    }

    //send an html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
            res.end();
        } else {
            // res.write(data);
            res.end(data);
        }
    });

});

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
});