console.log("In server.js");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.listen(port, () => {
    console.log("Show this message when the server is active");
});
//let content = [];
