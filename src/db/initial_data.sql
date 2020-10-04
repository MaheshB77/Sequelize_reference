-- Creating Student table
CREATE TABLE students
(
    student_id SERIAL PRIMARY KEY,
    student_name varchar(50),
    student_marks float4
);

-- Inserting some dummy data
INSERT INTO students
    (student_name,student_marks)
VALUES('Mahesh', 89.76);
INSERT INTO students
    (student_name,student_marks)
values('Aishwarya', 79.73);
INSERT INTO students
    (student_name,student_marks)
values('Shubhangi', 81.99);

-- Testing
SELECT *
FROM students;