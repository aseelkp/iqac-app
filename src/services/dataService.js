import { db } from "./firebaseConfig";
import { addDoc, collection, getDocs } from "@firebase/firestore";



export const getMainDepartment = async () => {
    return getDocs(collection(db, "mainDepartment" ));
}

export const getSingleDepartment = async () => {
    return getDocs(collection(db, "singleDepartment" ));
}

export const getPhysicalEducation = async () => {
    return getDocs(collection(db, "physicalEducation" ));
}

export const getClub = async () => {
    return getDocs(collection(db, "club" ));
}

export const getNssNcc = async () => {
    return getDocs(collection(db, "nssNcc" ));
}

export const getOffice = async () => {
    return getDocs(collection(db, "office" ));
}


export const createMainDepartment = async (data) => {
    return addDoc(collection(db, "mainDepartment" ), data);
}

export const createSingleDepartment = async (data) => {
    return addDoc(collection(db, "singleDepartment" ), data);
}

export const createPhysicalEducation = async (data) => {
    return addDoc(collection(db, "physicalEducation" ), data);
}

export const createClub = async (data) => {
    return addDoc(collection(db, "club" ), data);
}

export const createNssNcc = async (data) => {
    return addDoc(collection(db, "nssNcc" ), data);
}

export const createOffice = async (data) => {
    return addDoc(collection(db, "office" ), data);
}