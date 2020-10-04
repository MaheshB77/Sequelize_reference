const Sequelize = require("sequelize");

// Database configuration
const db = new Sequelize("Sequelize_reference", "postgres", "pass", {
    host: "localhost",
    dialect: "postgres",

    /* 
    If you don't want createdAt, updatedAt fields 
    which are required by default in sequelize then add this code
    */
    define: {
        timestamps: false
    }
});

module.exports = db;
