import UserCard from './UserCard'

function UserList({
  users,
  onSelectUser,
}) {
  return (
    <div>
      {users.map(user => (
        <UserCard
            key={user.id}
            user={user}
            onSelectUser={onSelectUser}
            />
      ))}
    </div>
  )
}

export default UserList