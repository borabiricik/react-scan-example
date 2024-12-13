import Image from 'next/image'
import React, { useContext } from 'react'
import { UsersContext } from '../context/users'

const Users = () => {
    const {users:filteredUsers} = useContext(UsersContext)
  return (
    <ul className='grid grid-cols-3 gap-4'>
        {filteredUsers.map((user,index)=>(
            <li key={index} className='flex items-center gap-2'>
                <Image src={user.picture.thumbnail} alt={user.name.first} width={40} height={40} className='rounded-full' />
                <span>{user.name.first}</span>
            </li>
        ))}
    </ul>
  )
}

export default Users