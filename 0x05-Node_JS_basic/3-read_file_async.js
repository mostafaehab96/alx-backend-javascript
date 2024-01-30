const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, fileContent) => {
    if (err) {
      reject(new Error('Cannot load the database'));
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
      console.log(`Number of students: ${count}`);
      const fieldsList = {};
      studentsObjects.forEach((student) => {
        fieldsList[student.field] = (fieldsList[student.field] || []).concat(student.firstName);
      });
      Object.keys(fieldsList).forEach((field) => {
        const names = fieldsList[field];
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        resolve();
      });
    }
  });
});

module.exports = countStudents;
