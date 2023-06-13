import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { app } from "../firebase/.firebase.config";

export const AuthContext = createContext(null);
const Authporviders = ({ children }) => {
    const [user, setUser] = useState(null)

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider()



    const signUpWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInwithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => unsubscribe()
    }, [])

    const authInfo = { user, signUpWithEmail, logIn, signInwithGoogle }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authporviders;