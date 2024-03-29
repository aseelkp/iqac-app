import {db} from "@/services/firebaseConfig";
import { collection, doc, getDoc, getDocs, setDoc} from "@firebase/firestore";

export const createUser = async (id, username, email, department) => {
    return setDoc(doc(db, "users", id), {
        username,
        email,
        department,
        role: "user",
    });
};

export const getUserById = async (id) => {
    return getDoc(doc(db, "users", id));
}

export const getUsers = async () => {
    return getDocs(collection(db, "users"));
}

