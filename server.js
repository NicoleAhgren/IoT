const RED = require('node-red');
const http = require('http');
const express = require('express');
const path = require('path');
const os = require('os');

const app = express();
const server = http.createServer(app);

const settings = {
    httpAdminRoot: '/admin',
    httpNodeRoot: '/',
    userDir: path.join(os.tmpdir(), '.node-red'),
    flowFile: path.join(__dirname, 'flows.json'),
    nodesDir: path.join(__dirname, 'node_modules'),
    functionGlobalContext: {}
};

RED.init(server, settings);
app.get('/admin/tslib.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'node_modules', 'tslib', 'tslib.js'));
});
app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);

const port = process.env.PORT || 1880;
server.listen(port, () => {
    console.log('Node-RED running on port ' + port);
    RED.start();
});
