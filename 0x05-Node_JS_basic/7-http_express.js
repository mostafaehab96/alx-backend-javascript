const express = require('express');
const fs = require('fs');

const dbName = process.argv[2];
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  fs.readFile(dbName, 'utf-8', (err, fileContent) => {
    if (err) {
      res.write('Cannot load the database');
      res.end();
    } else {
      const students = fileContent.trim().split('\n').slice(1);
      const studentsObjects = students.map((student) => {
        const studentsInfo = student.split(',');
        return {
          firstName: studentsInfo[0],
          secondName: studentsInfo[1],
          age: studentsInfo[2],
          field: studentsInfo[3],
        };
      });
      const count = students.length;
      res.write(`Number of students: ${count}\n`);
      const fieldsList = {};
      studentsObjects.forEach((student) => {
        fieldsList[student.field] = (fieldsList[student.field] || []).concat(student.firstName);
      });
      Object.keys(fieldsList).forEach((field) => {
        const names = fieldsList[field];
        res.write(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`);
      });
      res.end();
    }
  });
});

app.listen(1245);

module.exports = app;
