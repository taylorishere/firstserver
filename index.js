var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, () => console.log('--SERVER STARTED--'));