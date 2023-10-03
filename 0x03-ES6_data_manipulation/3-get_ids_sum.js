export default function getStudentIdsSum(students) {
  return students.reduce((previous, current) => previous + current.id, 0);
}
