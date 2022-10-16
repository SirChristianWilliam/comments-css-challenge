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
let voteNumbers = [0];
app.get('/display', (req,res) => {
    console.log("GET in server");
     res.send(voteNumbers);
})

app.put('/display', (req,res) => {
    console.log("PUT in server",res);
    let updatedVote = Number(req.body.currentNumber);
    voteNumbers.pop();
    voteNumbers.push(updatedVote);
    res.sendStatus(201);
})