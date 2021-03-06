import React, {createContext, useState} from "react";
import { useEffect } from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from "./utils";

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({children}: IAuthProvider) => {
  const [user, setUser] = useState <IUser | null>()

  async function authenticate (email: string, password: string) {
    const response = await LoginRequest(email, password)

    useEffect(() =>{
      const user = getUserLocalStorage()

      if (user){
        setUser(user)
      }
    }, [])

    const payload = {token: response.token, email}
    setUser(payload)
    setUserLocalStorage(payload)
  }

   function logout () {
    setUser(null)
    setUserLocalStorage(null)
  }

  return(
    <AuthContext.Provider value={{...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  )
}