const http = require('http');
const url = require('url');

let views = {
    '/': 0,
    '/about': 0
};

const server = http.createServer((req, res) => {
    const path = url.parse(req.url).pathname;

    if (path === '/') {
        views['/']++;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <h1>Home Page</h1>
            <p>Views: ${views['/']}</p>
            <a href="/about">About Page</a>
        `);
    } else if (path === '/about') {
        views['/about']++;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <h1>About Page</h1>
            <p>Views: ${views['/about']}</p>
            <a href="/">Home Page</a>
        `);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`
            <h1>404 Not Found</h1>
            <p>The page you requested doesn't exist.</p>
            <a href="/">Home Page</a>
        `);
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/`);
});
