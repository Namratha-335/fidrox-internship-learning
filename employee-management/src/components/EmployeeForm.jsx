import { useState, useEffect } from 'react'

function EmployeeForm({
  employees,
  setEmployees,
  editingIndex,
  setEditingIndex,
  onSuccess
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    designation: '',
    salary: '',
    joiningDate: '',
    gender: ''
  })

  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (editingIndex !== null) {
      setFormData(employees[editingIndex])
    }
  }, [editingIndex, employees])

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function validateForm() {
    const newErrors = {}

    if (!formData.name) {
      newErrors.name = 'Employee name is required'
    }

    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!formData.email.includes('@')) {
      newErrors.email = 'Enter a valid email'
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits'
    }

    if (!formData.department) {
      newErrors.department = 'Department is required'
    }

    if (!formData.designation) {
      newErrors.designation = 'Designation is required'
    }

    if (!formData.salary) {
      newErrors.salary = 'Salary is required'
    }

    if (!formData.joiningDate) {
      newErrors.joiningDate = 'Joining date is required'
    }

    if (!formData.gender) {
      newErrors.gender = 'Gender is required'
    }

    return newErrors
  }

  function handleSubmit(e) {
    e.preventDefault()

    const validationErrors = validateForm()
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      return
    }

    if (editingIndex !== null) {
      const updatedEmployees = [...employees]

      updatedEmployees[editingIndex] = formData

      setEmployees(updatedEmployees)
      setEditingIndex(null)

      if (onSuccess) {
        onSuccess()
      }
    } else {
      const newEmployee = {
        ...formData,
        id: Date.now()
      }

      setEmployees([...employees, newEmployee])

      if (onSuccess) {
        onSuccess()
      }
    }

    setFormData({
      name: '',
      email: '',
      phone: '',
      department: '',
      designation: '',
      salary: '',
      joiningDate: '',
      gender: ''
    })

    setErrors({})
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>
        {editingIndex !== null ? 'Edit Employee' : 'Add Employee'}
      </h2>

      <input
        type="text"
        name="name"
        placeholder="Employee Name"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && <p>{errors.name}</p>}

      <br />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p>{errors.email}</p>}

      <br />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
      />
      {errors.phone && <p>{errors.phone}</p>}

      <br />

      <select
        name="department"
        value={formData.department}
        onChange={handleChange}
      >
        <option value="">Select Department</option>
        <option value="IT">IT</option>
        <option value="HR">HR</option>
        <option value="Finance">Finance</option>
        <option value="Marketing">Marketing</option>
      </select>
      {errors.department && <p>{errors.department}</p>}

      <br />

      <input
        type="text"
        name="designation"
        placeholder="Designation"
        value={formData.designation}
        onChange={handleChange}
      />
      {errors.designation && <p>{errors.designation}</p>}

      <br />

      <input
        type="number"
        name="salary"
        placeholder="Salary"
        value={formData.salary}
        onChange={handleChange}
      />
      {errors.salary && <p>{errors.salary}</p>}

      <br />

      <input
        type="date"
        name="joiningDate"
        value={formData.joiningDate}
        onChange={handleChange}
      />
      {errors.joiningDate && <p>{errors.joiningDate}</p>}

      <br />

      <p>Gender:</p>

      <label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={formData.gender === 'Male'}
          onChange={handleChange}
        />
        Male
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={formData.gender === 'Female'}
          onChange={handleChange}
        />
        Female
      </label>

      {errors.gender && <p>{errors.gender}</p>}

      <br />

      <button type="submit">
        {editingIndex !== null ? 'Update Employee' : 'Add Employee'}
      </button>
    </form>
  )
}

export default EmployeeForm