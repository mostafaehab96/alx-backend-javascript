export default function updateStudentGradeByCity(students, city, newGrades) {
  if (Array.isArray(students)) {
    const graded = students.map((student) => {
      const grade = newGrades.find((newGrade) => newGrade.studentId === student.id);
      return { ...student, grade: grade ? grade.grade : 'N/A' };
    });

    return graded.filter((student) => student.location === city);
  }

  return [];
}
