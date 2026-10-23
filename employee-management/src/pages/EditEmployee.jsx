import { useParams, useNavigate } from 'react-router-dom'
import EmployeeForm from '../components/EmployeeForm'

function EditEmployee({ employees, setEmployees }) {
  const { id } = useParams()
  const navigate = useNavigate()

  const employeeIndex = employees.findIndex(
    employee => employee.id === Number(id)
  )

  if (employeeIndex === -1) {
    return (
      <div>
        <h1>Employee Not Found</h1>

        <button onClick={() => navigate('/employees')}>
          Back to Employees
        </button>
      </div>
    )
  }

  function handleSuccess() {
    navigate('/employees')
  }

  return (
    <div>
      <h1>Edit Employee</h1>

      <EmployeeForm
        employees={employees}
        setEmployees={setEmployees}
        editingIndex={employeeIndex}
        setEditingIndex={() => {}}
        onSuccess={handleSuccess}
      />
    </div>
  )
}

export default EditEmployee