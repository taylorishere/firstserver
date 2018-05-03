var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log('--SERVER STARTED--'));