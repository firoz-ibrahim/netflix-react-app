import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export function AuthContextProvider({ children }) {
  const [user, setUser] = useState("");

  // saving the shows to the firestore
  function signUp(email, password) {
    try {
      createUserWithEmailAndPassword(auth, email, password);
      setDoc(doc(db, "users", email), {
        savedShows: [],
      });
    } catch (error) {
      console.log(error);
    }
  }
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });
    return () => {
      unsubscribe();
    };
  });

  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
