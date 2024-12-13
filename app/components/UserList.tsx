"use client"
import SearchInput from './SearchInput'
import Users from './Users'

const UserList = () => {
    
  return (
    <div className='flex flex-col gap-4'>
        <SearchInput placeholder='Search users' />
        <Users />
    </div>
  )
}

export default UserList