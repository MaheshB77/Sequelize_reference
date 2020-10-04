const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Student = require("../models/Student");

// Get all students
router.get("/", (req, res) => {
    /**
     * Retrieving all data from students table
     */
    Student.findAll()
        .then((students) => {
            console.log(students);
            res.send(students);
        })
        .catch((err) => console.log(err));
});

module.exports = router;
