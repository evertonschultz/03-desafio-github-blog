import { ReactNode, useEffect, useState, useCallback, createContext } from 'react'
import { api } from '../lib/axios'

export interface UserGit {
  avatar_url: string,
  bio: string,
  login: string,
  name: string,
  url: string,
  html_url: string;
  followers: number,
  company: string,
}

interface UserContextType {
  user?: UserGit
}

interface UserProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextType)

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<UserGit>()

  const fetchUser = useCallback(async () => {
    const response = await api.get('/users/evertonschultz')
    setUser(response.data)
  }, [])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <UserContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
