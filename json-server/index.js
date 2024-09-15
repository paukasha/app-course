const jsonServer = require('json-server');
const path = require('path');
const fs = require('fs');
// const jwt = require('jsonwebtoken');

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});

server.use((req, res, next) => {
    if (!req.headers.authorization) {
        res.status(403).json({ message: 'AUTH_ERROR' });
    }
    next();
});

server.use(jsonServer.defaults());

server.use(router);

server.post('/login', (req, res) => {
    const { username, password } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const { users } = db;

    // eslint-disable-next-line max-len
    const userFromDb = users.find((user) => user.username === username && user.password === password);
    if (userFromDb) {
        res.json(userFromDb);
    }

    return res.status(403).json({ message: 'AUTH-ERROR' });
});

server.listen(8000, () => {
    console.log('server is running on 8000 port ');
});
