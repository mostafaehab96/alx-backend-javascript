export default function createReportObject(employeesList) {
  const result = {
    allEmployees: {},
  };
  for (const depart in employeesList) {
    if (employeesList) {
      result.allEmployees[depart] = employeesList[depart];
    }
  }

  return result;
}
