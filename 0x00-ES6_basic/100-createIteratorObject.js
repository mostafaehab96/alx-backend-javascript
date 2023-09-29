export default function* createIteratorObject(report) {
  for (const key of Object.keys(report.allEmployees)) {
    for (const employee of report.allEmployees[key]) {
      yield employee;
    }
  }
}
