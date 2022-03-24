import { collection, doc, query, setDoc, where, getDocs } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider,
            signOut, signInWithPopup, signInAnonymously } from "firebase/auth";
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
    // window.location.replace("/");
}


export async function CreateNewUser(uid, user) {
    const isUser = user !== undefined && user !== null ? true : false;
    const dn = isUser && user.displayName !== null ? user.displayName : "";

    const payload = {
        displayName: dn.length > 0 ? `${user.displayName}` : "",
        email: isUser ? user.email : "",
        profileUrl:isUser && user.profileUrl ? user.profileUrl : "",
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

