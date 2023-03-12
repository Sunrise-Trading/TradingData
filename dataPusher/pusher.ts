import * as Models from './models';
import * as firebase from 'firebase/app'
import * as gbase from "firebase/firestore"
// Initialize Firebase
export const firebaseConfig = {
    apiKey: "AIzaSyAsm88yPN-tNHhCwf94uerHmSm0erCAYOc",
    authDomain: "tradingapp-84f28.firebaseapp.com",
    projectId: "tradingapp-84f28",
    storageBucket: "tradingapp-84f28.appspot.com",
    messagingSenderId: "442244948977",
    appId: "1:442244948977:web:49e5b9956fd20b35fa1a50",
    measurementId: "G-SKZ0YB00GY"
};
export const app = firebase.initializeApp(firebaseConfig);
export const db = gbase.getFirestore(app);
let m: Models.Plan = {
    isLong: true,
};

const push = async (data: Models.Plan) => {
    let now = new Date();
    let docRef = await gbase.doc(db, `configData/tradingPlan`) // create this document newDoc at this path
    gbase.setDoc(docRef, {
        tradingPlan: data,
        timestamp: now,
    });
};
push(m);
console.log(m);