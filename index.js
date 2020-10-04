const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./src/config/database");
const Student = require("./src/models/Student");
// Test db
db.authenticate()
    .then(() => {
        console.log("Database connected....");
    })
    .catch((err) => {
        console.log(err);
    });

// Home route
app.get("/", (req, res) => {
    res.send("Homepage");
    res.end();
});

// Student routes
app.use("/student", require("./src/routes/student_route"));

app.listen(8085, () => {
    console.log(`Listening on 8085`);
});
