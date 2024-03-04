const fs = require('fs');


const requestHandler = (req, res) => {

    const url = req.url;



    if (url === '/') {
        res.write('<html>')
        res.write('<head>  <title> Enter the message</title></head>');
        res.write('<body>  <form action="/message" method="POST" ><input type="text" name="message"><button type="submit">Send</button></form> </body>')
        res.write('</html>');
        return res.end();
    }
    if (url === '/message') {

        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedbody = Buffer.concat(body).toString();
            const message = parsedbody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }

    res.setHeader('content-type', 'text/html');
    res.write('<html>')
    res.write('<head>  <title> My First Node app </title></head>');
    res.write('<body>  This is my first Node Server </body>')
    res.write('</html>');
    res.end();
};

module.exports = {
    handler: requestHandler,
    someText: ' some hard text'
}
    ;



