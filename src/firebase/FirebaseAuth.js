import { collection, doc, query, setDoc, where, getDocs } from "firebase/firestore";
import {
    createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider,
    signOut, signInWithPopup, signInAnonymously, onAuthStateChanged
} from "firebase/auth";
import { FIREBASE_AUTH, FIREBASE_FIRESTORE } from "./FirebaseConfig";

const PathString = "USERS"

export function Register(email, password) {
    console.log("???", email, password)
    return createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
}

export function Login(email, password) {
    return signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
}

export function SignInWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(FIREBASE_AUTH, provider);

}
export function SignInUnknown() {
    return signInAnonymously(FIREBASE_AUTH);
}

export function Logout() {
    return signOut(FIREBASE_AUTH);
    window.location.replace("/");
}


export async function CreateNewUser(uid, user) {
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


export function GetAuthState() {

    return new Promise((resolve, reject) => {
        let returnUser = {
            displayName: "",
            email: "",
            profileUrl: "",
            uid: "uid",
            role: ""
        };

        return onAuthStateChanged(FIREBASE_AUTH,
            async function (user) {
                console.log("This current user is ", user?.uid, user);

                if (user !== null) {
                    const Ref = collection(FIREBASE_FIRESTORE, PathString);

                    const q = query(Ref, where("uid", "==", `${user.uid}`));
                    const querySnapshot = await getDocs(q);
                    console.log("qs", querySnapshot.docs.length);

                    if (querySnapshot.docs.length === 0) {
                        console.log("Unknown user checked and is getting an auth ==> query and ==>return then we are in")
                        CreateNewUser(user.uid, user)
                            .then(() => {
                                returnUser = {
                                    displayName: user.displayName && user.displayName.length > 0 ? user.displayName : "",
                                    email: user.email ? user.email : "",
                                    profileUrl: "",
                                    uid: user.uid,
                                    role: "user"
                                };
                                console.log("Now we are recieving the promise")
                                return resolve(returnUser);
                            }).catch((error) => {
                                reject(`Error occured here: , ${error}`)
                            });
                    } else {
                        console.log("Unknown user checked and is getting an auth ==> query and ==>return does exist entry then we are here to fill local variable",);

                        returnUser = {
                            displayName: user.displayName && user.displayName.length > 0 ? user.displayName : "",
                            email: user.email ? user.email : "",
                            profileUrl: "",
                            uid: user.uid,
                            role: "user"
                        };
                        console.log("Now we are recieving the promise")
                        return resolve(returnUser);
                    }
                    resolve(returnUser);
                }
            })
    })

}
