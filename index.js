const express = require("express");
const app = express();

console.dir(app);

let port = 3000;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

//app.use((req, res) => {
//console.log("request received");
//res.send("This is a basic response");
//});

app.get("/", (req, res) => {
    res.send("You Contacted Root Path");
});


app.get("/Sanket", (req, res) => {
    res.send("You Contacted Sanket Path");
});

app.get("/Sandy", (req, res) => {
    res.send("You Contacted Sandy Path");
});

app.get("/Sandy", (req, res) => {
    console.log(req.query);
    res.send("No Result");
});

app.get("*", (req, res) => {
    res.send("This path does not Exist..!");
});