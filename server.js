const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');

var index = require('./routes/index');

const app = express();

// View engine
nunjucks.configure('views', {
    autoescape: true,
    express: app
});

// Static files
app.use(express.static(path.join(__dirname, "client")));

// Body parser MW
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/', index);

app.listen(8000, () => {
  console.log('Server started and listening');
});
