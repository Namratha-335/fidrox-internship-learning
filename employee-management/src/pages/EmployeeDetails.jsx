import { useParams, useNavigate } from 'react-router-dom'

function EmployeeDetails({ employees }) {
  const { id } = useParams()
  const navigate = useNavigate()

  const employee = employees.find(
    employee => employee.id === Number(id)
  )

  if (!employee) {
    return (
      <div>
        <h1>Employee Not Found</h1>
        <button onClick={() => navigate('/employees')}>
          Back to Employees
        </button>
      </div>
    )
  }

  return (
    <div>
      <h1>Employee Details</h1>

      <h2>{employee.name}</h2>

      <p>Email: {employee.email}</p>
      <p>Phone: {employee.phone}</p>
      <p>Department: {employee.department}</p>
      <p>Designation: {employee.designation}</p>
      <p>Salary: {employee.salary}</p>
      <p>Joining Date: {employee.joiningDate}</p>
      <p>Gender: {employee.gender}</p>

      <button onClick={() => navigate('/employees')}>
        Back to Employees
      </button>
    </div>
  )
}

export default EmployeeDetails