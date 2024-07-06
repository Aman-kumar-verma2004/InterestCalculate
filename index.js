const express = require("express");
const config = require("./config");
//Now creating the instance for express application
const app = express();

app.use(express.json());

const port = config.PORT;

app.get("/interest", (req, res) => {
    const principal = req.query.principal;
    const rate = req.query.rate;
    const time = req.query.time;

    const result = (principal * rate * time ) / 100;
    res.send(`interest for this principal amount ${principal} for rate ${rate}% for time ${time} years is ${result}`);
});


app.listen(port, ()=>{
    console.log("Server is live");
})