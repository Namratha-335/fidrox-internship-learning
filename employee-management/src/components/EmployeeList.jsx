function EmployeeList({ employees, onDelete, onEdit }) {
  return (
    <div>
      <h2>Employees</h2>

      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        employees.map((employee, index) => (
          <div key={index}>
            <h3>{employee.name}</h3>

            <p>Email: {employee.email}</p>
            <p>Phone: {employee.phone}</p>
            <p>Department: {employee.department}</p>
            <p>Designation: {employee.designation}</p>
            <p>Salary: {employee.salary}</p>
            <p>Joining Date: {employee.joiningDate}</p>
            <p>Gender: {employee.gender}</p>

            <button onClick={() => onEdit(index)}>
              Edit
            </button>

            <button onClick={() => onDelete(index)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  )
}

export default EmployeeList