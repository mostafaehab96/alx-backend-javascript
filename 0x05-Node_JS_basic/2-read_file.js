const fs = require('fs');

const countStudents = (path) => {
  let fileContent;
  try {
    fileContent = fs.readFileSync(path, 'utf8').trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const students = fileContent.split('\n').slice(1);
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
  });
};

module.exports = countStudents;
