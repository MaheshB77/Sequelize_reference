const Sequelize = require("sequelize");
const db = require("../config/database");

const Student = db.define("student", {
    /**
     * If we do not do this then sequelize will look for
     * "id". Therefore if we have a primary key in table
     * then we have to give "primaryKey:true" for that field
     */
    student_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },

    /**
     * The fields that we want from table
     */
    student_name: {
        type: Sequelize.STRING
    },
    student_marks: {
        type: Sequelize.FLOAT
    }
});

module.exports = Student;
