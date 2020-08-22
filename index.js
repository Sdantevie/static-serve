'use strict';

const path = require('path');
const express = require('express');
const app = express();
const http = require('http');

app.use(express.static(path.join(__dirname, 'build')));

const server = http.createServer(app);

server.listen(3002);