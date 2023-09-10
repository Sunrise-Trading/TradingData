import * as Models from './models';
import * as Data from './data';
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
let data = Data.stocksTradingPlans;
let stockSelections = Data.stockSelections;
let today = new Date();
let todayStr = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
let expiredAt = new Date();
expiredAt.setDate(expiredAt.getDate() + 21);
const push = async (
    plans: Models.TradingPlans[], stockSelections: string[], path: string) => {
    let now = new Date();
    let docRef = await gbase.doc(db, path) // create this document newDoc at this path
    gbase.setDoc(docRef, {
        plans: plans,
        stockSelections: stockSelections,
        activeProfileName: Data.activeProfileName,
        timestamp: now,
        expiredAt: expiredAt,
    });
};
push(data, stockSelections, `configData/tradingPlan`);
push(data, stockSelections, `configDataSnapshot/${todayStr}`);
console.log(data);
console.log(stockSelections);
