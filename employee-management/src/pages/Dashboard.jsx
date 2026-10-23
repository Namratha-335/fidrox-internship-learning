function Dashboard({ employees }) {
  const totalEmployees = employees.length

  const totalDepartments = new Set(
    employees.map(employee => employee.department)
  ).size

  return (
    <div>
      <h1>Dashboard</h1>

      <h2>Employee Statistics</h2>

      <p>Total Employees: {totalEmployees}</p>

      <p>Total Departments: {totalDepartments}</p>
    </div>
  )
}

export default Dashboard