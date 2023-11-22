const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const rows = data.split('\n').slice(1);
      const info = {};
      const counts = {};
      let count = 0;
      rows.forEach((row) => {
        const columns = row.split(',');
        if (columns.length === 4) {
          count += 1;
          const field = columns[3];
          info[field] = info[field] ? [...info[field], columns[0]] : [columns[0]];
          counts[field] = (counts[field] || 0) + 1;
        }
      });

      console.log(`Number of students: ${count}`);
      /* eslint-disable no-prototype-builtins */
      for (const field in info) {
        if (info.hasOwnProperty(field)) {
          console.log(`Number of students in ${field}: ${counts[field]}. List: ${info[field].join(', ')}`);
        }
      }

      resolve();
    });
  });
}

module.exports = countStudents;
