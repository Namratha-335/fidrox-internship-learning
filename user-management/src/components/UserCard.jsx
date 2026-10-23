function UserCard({ user, onSelectUser }) {
  return (
    <div className="user-card" onClick={() => onSelectUser(user)}>
      <div>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    </div>
  )
}

export default UserCard