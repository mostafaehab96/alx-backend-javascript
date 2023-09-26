export default function createReportObject(employeesList) {
  const result = {
    allEmployees: {},
    getNumberOfDepartments(allEmployees) {
      return Object.values(allEmployees).length;
    },
  };
  for (const depart in employeesList) {
    if (employeesList) {
      result.allEmployees[depart] = employeesList[depart];
    }
  }

  return result;
}
