import { createContext, useState, useContext } from "react";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase";



const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    
    const signinWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)
    }
    const value = {currentUser, setCurrentUser, signinWithGoogle} 

    return ( <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

         
    )
    
}
export const UserAuth = () => {
    return useContext(AuthContext);
}