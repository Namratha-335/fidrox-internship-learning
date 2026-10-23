import { useEffect, useState } from 'react'
import { getUsers } from './services/userService'
import UserList from './components/UserList'
import SearchBar from './components/SearchBar'
import Loading from './components/Loading'
import ErrorMessage from './components/ErrorMessage'

function App() {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedUser, setSelectedUser] = useState(null)

  useEffect(() => {
    getUsers()
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
      .catch(() => {
        setError('Failed to fetch users')
        setLoading(false)
      })
  }, [])

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <h1>User Management</h1>

      <p>Total users: {users.length}</p>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <UserList
          users={filteredUsers}
          onSelectUser={setSelectedUser}
        />
      )}

      {selectedUser && (
        <div>
          <h2>User Details</h2>
          <p>Name: {selectedUser.name}</p>
          <p>Username: {selectedUser.username}</p>
          <p>Email: {selectedUser.email}</p>
          <p>Phone: {selectedUser.phone}</p>
          <p>Website: {selectedUser.website}</p>
        </div>
      )}
    </div>
  )
}

export default App