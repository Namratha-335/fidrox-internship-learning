import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeCard from '../components/EmployeeCard'

function Employees({ employees, setEmployees }) {
  const [search, setSearch] = useState('')
  const [department, setDepartment] = useState('All')

  const navigate = useNavigate()

  function deleteEmployee(index) {
    const confirmed = window.confirm(
      'Are you sure you want to delete this employee?'
    )

    if (confirmed) {
      setEmployees(employees.filter((_, i) => i !== index))
    }
  }

  function editEmployee(index) {
    const employee = employees[index]

    navigate(`/employees/edit/${employee.id}`)
  }

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch =
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.email.toLowerCase().includes(search.toLowerCase())

    const matchesDepartment =
      department === 'All' || employee.department === department

    return matchesSearch && matchesDepartment
  })

  return (
    <div>
      <h1>Employees</h1>

      <button onClick={() => navigate('/employees/add')}>
        Add Employee
      </button>

      <br /><br />

      <input
        type="text"
        placeholder="Search employees..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="All">All Departments</option>
        <option value="IT">IT</option>
        <option value="HR">HR</option>
        <option value="Finance">Finance</option>
        <option value="Marketing">Marketing</option>
      </select>

      <hr />

      {filteredEmployees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        filteredEmployees.map((employee, index) => (
          <div key={index}>
            <EmployeeCard employee={employee} />

            <button onClick={() => editEmployee(index)}>
              Edit
            </button>

            <button onClick={() => deleteEmployee(index)}>
              Delete
            </button>

            <hr />
          </div>
        ))
      )}
    </div>
  )
}

export default Employees