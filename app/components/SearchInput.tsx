import classNames from "classnames"
import React, { useContext, useMemo } from "react"
import { UsersContext } from "../context/users"

type Props = React.InputHTMLAttributes<HTMLInputElement>

const Input = ({ className, ...props }: Props) => {
  const {users,setUsers} = useContext(UsersContext)
  const handleChange = useMemo(()=>{
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const filteredUsers = users.filter((user) => user.name.first.toLowerCase().includes(e.target.value.toLowerCase()))
      setUsers(filteredUsers)
    }
  },[users,setUsers])

  return (
    <input
      type="text"
      onChange={handleChange}
      className={classNames(
        "border border-gray-300 rounded-md p-2",
        "bg-transparent outline-none",
        className
      )}
      {...props}
    />
  )
}

export default Input
