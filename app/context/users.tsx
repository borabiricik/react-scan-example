"use client"
import { createContext, useState } from "react"
import { GetUsersResponse } from "../types/response"

export const UsersContext = createContext<{
  users: GetUsersResponse["results"]
  setUsers: (users: GetUsersResponse["results"]) => void
}>({ users: [], setUsers: () => {} })

export const UsersProvider = ({ children,users }: { children: React.ReactNode,users:GetUsersResponse["results"] }) => {
  const [usersInternal, setUsersInternal] = useState<GetUsersResponse["results"]>(users)
  return (
    <UsersContext.Provider value={{ users:usersInternal, setUsers:setUsersInternal }}>
      {children}
    </UsersContext.Provider>
  )
}
