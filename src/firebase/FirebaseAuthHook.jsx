import React, { useState, useEffect } from 'react'
import { createContext, useContext } from 'react'
import { collection, doc, query, setDoc, where, getDocs, updateDoc } from "firebase/firestore";
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
                   
                   

                     const q = query(Ref, where("uid", "==", `${user.uid}`))
                    const querySnapshot = await getDocs(q)
                    if (querySnapshot.docs[0]) {
                        const data = querySnapshot.docs[0].data();

                        UserToUse = {
                            cell: data.cell,
                            displayName: data.displayName,
                            email: data.email,
                            profileUrl: data.profileUrl,
                            uid: data.uid,
                            role: data.role,
                            cart: data.cart
                        };
                    }


                }
                setCurrentUser(user ? UserToUse : null)
            });
    }, [])

    useEffect(() => {}, [CurrentUser])

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

    async function AddProductToCart(uid, order) {
        const docRef = doc(FIREBASE_FIRESTORE, `${PathString}/${uid}`);

        await updateDoc(docRef, { cart: order })
            .then((res) => {
                console.log("Added product to user cart", res);
            }).catch((err) => {
                console.log("Error cannot add to user cart", err);
            });
    }


    async function RemoveProductFromCart(uid, prodId) {
        console.log("??? ", uid, prodId);
        const docRef = doc(FIREBASE_FIRESTORE, `${PathString}/${uid}`);

        let tempArr = CurrentUser !== null ? CurrentUser.cart : [];
        let arr = tempArr.filter((e) => e.id !== prodId);
        
        console.log("Arr ??", arr);

        // let arr1 = [];
        // tempArr.forEach((e) =>{
        //     if(e.id !== prodId){
        //         arr1.push(e);
        //     }
        // })

        await updateDoc(docRef, { cart: arr })
            .then((res) => {
                console.log("Files array update successful", res);
            }).catch((err) => {
                console.log("Files array update unsuccessful", err);
            });
    }

    const value = {
        CurrentUser,
        Register,
        Login,
        Logout,
        SignInUnknown,
        SignInWithGoogle,
        CreateNewUser,
        AddProductToCart,
        RemoveProductFromCart
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

