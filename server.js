'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

require('./routes/get/views')(app);
require('./routes/post/send-email')(app, nodemailer);

app.listen(port, () => {
  console.log('Web server listening on port ' + port);
});
