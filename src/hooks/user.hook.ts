import { useEffect, useState } from 'react';
import { store } from "../store";

export const useLogin = (currentEmail: string, currentPassword: string) => {
  const [isLogged, setIsLogged] = useState(false);
  
  useEffect(() => {
    const user = store.getState().userState.users.find(({ email, password }) => email === currentEmail && password === currentPassword);
    if(user !== undefined) {
      setIsLogged(true);
    } 
  }, [currentEmail, currentPassword]);

  return isLogged;
}