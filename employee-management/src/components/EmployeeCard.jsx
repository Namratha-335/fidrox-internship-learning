import { Link } from 'react-router-dom'

function EmployeeCard({ employee }) {
  return (
    <div>
      <h3>{employee.name}</h3>

      <p>Email: {employee.email}</p>
      <p>Department: {employee.department}</p>
      <p>Designation: {employee.designation}</p>

      <Link to={`/employees/${employee.id}`}>
        View Details
      </Link>
    </div>
  )
}

export default EmployeeCard