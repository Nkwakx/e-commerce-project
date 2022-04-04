import React, { useState, useEffect } from 'react'
import { createContext, useContext } from 'react'
import { collection, doc, query, setDoc, where, getDocs } from "firebase/firestore";
import {
    createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider,
    signOut, signInWithPopup, signInAnonymously, onAuthStateChanged
} from "firebase/auth";
import { FIREBASE_AUTH, FIREBASE_FIRESTORE } from "./FirebaseConfig";

const PathString = "USERS"

const AuthContext = createContext({})
export const useAuth = () => useContext(AuthContext)

export default function FirebaseAuthHookProvider({ children, ...props }) {

    const [CurrentUser, setCurrentUser] = useState({})

    useEffect(() => {
        onAuthStateChanged(FIREBASE_AUTH,
            async function (user) {
                let UserToUse = {}

                const Ref = collection(FIREBASE_FIRESTORE, PathString);

                if (user !== null) {
                    const q = query(Ref, where("uid", "==", `${user.uid}`));
                    const querySnapshot = await getDocs(q);

                    if( querySnapshot.docs[0]){
                        const data = querySnapshot.docs[0].data();

                        UserToUse = {
                            cell: data.cell,
                            displayName: data.displayName,
                            email: data.email,
                            profileUrl: data.profileUrl,
                            uid: data.uid,
                            role: data.role
                        };
                    }

                    
                }
                setCurrentUser(user ? UserToUse : null)
            });
    }, [CurrentUser])

    // useEffect(() => {}, [CurrentUser])

    function Register(email, password) {
        console.log("???", email, password)
        return createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
    }

    function Login(email, password) {
        return signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
    }

    function SignInWithGoogle() {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(FIREBASE_AUTH, provider);

    }
    function SignInUnknown() {
        return signInAnonymously(FIREBASE_AUTH);
    }

    function Logout() {
        return signOut(FIREBASE_AUTH);
        window.location.replace("/");
    }

    async function CreateNewUser(uid, user) {
        const isUser = user !== undefined && user !== null ? true : false;
        const dn = isUser && user.displayName !== null ? user.displayName : "";

        const payload = {
            displayName: dn.length > 0 ? dn : "",
            email: isUser ? user.email : "",
            profileUrl: isUser && user.profileUrl ? user.profileUrl : "",
            uid: uid,
            role: "user"
        }

        console.log("???", payload, uid, user)
        const Ref = collection(FIREBASE_FIRESTORE, PathString);
        const docRef = doc(FIREBASE_FIRESTORE, PathString, uid);


        const q = query(Ref, where("uid", "==", `${uid}`));
        const querySnapshot = await getDocs(q);
        console.log("qs", querySnapshot.docs.length);

        if (querySnapshot.docs.length === 0) {
            await setDoc(docRef, payload)
                .then((res) => {
                    console.log("Created new user entry in db ", res);
                })
                .catch((err) => {
                    console.log("Error, cannot new user entry in db", err);
                });
        }
    }



    const value = {
        CurrentUser,
        Register,
        Login,
        Logout,
        SignInUnknown,
        SignInWithGoogle,
        CreateNewUser
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

