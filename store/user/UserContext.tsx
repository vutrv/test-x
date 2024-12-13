'use client'

import { createContext, ReactNode } from 'react'

interface User {
  name: string
  email: string
}

export const UserContext = createContext<User | undefined>(undefined)

export function UserProvider({
  user,
  children,
}: {
  user: User | undefined
  children: ReactNode
}) {
  console.log({ user })
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}
