import { useNavigate } from 'react-router-dom'
import EmployeeForm from '../components/EmployeeForm'

function AddEmployee({ employees, setEmployees }) {
  const navigate = useNavigate()

  function handleSuccess() {
    navigate('/employees')
  }

  return (
    <div>
      <h1>Add Employee</h1>

      <EmployeeForm
        employees={employees}
        setEmployees={setEmployees}
        editingIndex={null}
        setEditingIndex={() => {}}
        onSuccess={handleSuccess}
      />
    </div>
  )
}

export default AddEmployee