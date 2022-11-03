import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth
   } from "../utils/Firebase/firebase.utils";
//the context value you want to access from firebase
export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});
//the provider which is a functional component that receives props/children and returns a provider
export const UserProvider = ({ children }) => {
  const [ currentUser, setCurrentUser ] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if(user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
      
    }) 
    return unsubscribe
  }, []);
  


  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
