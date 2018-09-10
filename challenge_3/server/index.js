const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, '../public')));

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(3007, () => console.log('Listening on port 3007'));
