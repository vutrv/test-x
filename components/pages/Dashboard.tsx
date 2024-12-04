'use client'

import { UserContext } from '@/store'
import { useContext } from 'react'

export default function DashBoard() {
  const user = useContext(UserContext)

  if (!user) return null

  return (
    <main>
      <h1>Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
      <p>User role is: {user.email.includes('admin') ? 'admin' : 'user'}</p>
    </main>
  )
}
