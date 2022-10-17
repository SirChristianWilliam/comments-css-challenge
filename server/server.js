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
let voteArray = [];
app.get('/display', (req,res) => {
    console.log('in server GET',voteArray);
    res.send(voteArray);
})
app.post('/display', (req,res) => {
    console.log("in POST",req.body);
    let serverObj = {
        vote1: req.body.voteOne,
        vote2: req.body.voteTwo,
        vote3: req.body.voteThree,
        vote4: req.body.voteFour
    }
    voteArray.push(serverObj);
    res.sendStatus(201);
})
