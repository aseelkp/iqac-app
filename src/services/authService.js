import {auth} from "@/services/firebaseConfig";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "@firebase/auth";

export const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}
export const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}