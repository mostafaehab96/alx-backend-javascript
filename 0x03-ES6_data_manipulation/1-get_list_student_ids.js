export default function getListStudentIds(students) {
  let ids = [];
  if (Array.isArray(students)) ids = students.map((student) => student.id);
  return ids;
}
