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
let timeStr = `${todayStr}-${today.getHours()}-${today.getMinutes()}-${today.getSeconds()}`;
let expiredAt = new Date();
expiredAt.setDate(expiredAt.getDate() + 21);
let shortExpiredAt = new Date();
shortExpiredAt.setDate(shortExpiredAt.getDate() + 4);
const push = async (
    content: any, path: string, exp: Date) => {
    let now = new Date();
    let docRef = await gbase.doc(db, path) // create this document newDoc at this path
    gbase.setDoc(docRef, {
        ...content,
        timestamp: now,
        expiredAt: exp,
    });
};
const planData = {
    topLevelPlans: Data.topLevelPlans,
    plans: data,
    activeProfileName: Data.activeProfileName,
    tradingSettings: Data.tradingSettings,
    stockSelections: stockSelections,
}

for (let i = 0; i < planData.plans.length; i++) {
    let p = planData.plans[i];
    let a = p.analysis;
    if (a.singleMomentumKeyLevel.high > 0) {
        let keyLevel = p.analysis.singleMomentumKeyLevel;
        if (a.allowFirstMinuteByNewsQuality &&
            a.allowFirstMinuteByRelativeVolume && a.allowFirstMinutezByKeyLevelsQuality) {
            if (!p.long.openDriveContinuation60Plan) {
                p.long.openDriveContinuation60Plan = {
                    requireOpenBetterThanVwap: true,
                    disableIfOpenWorseThanPrice: keyLevel.high,
                    planConfigs: p.defaultConfigs,
                    targets: p.defaultTargets,
                }
            }
            if (!p.short.openDriveContinuation60Plan) {
                p.short.openDriveContinuation60Plan = {
                    requireOpenBetterThanVwap: true,
                    disableIfOpenWorseThanPrice: keyLevel.low,
                    planConfigs: p.defaultConfigs,
                    targets: p.defaultTargets,
                }
            }
        }
        if (p.keyLevels.momentumStartForLong == 0) {
            p.keyLevels.momentumStartForLong = keyLevel.high;
        }
        if (p.keyLevels.momentumStartForShort == 0) {
            p.keyLevels.momentumStartForShort = keyLevel.low;
        }
    }
}
push(planData, `configData/tradingPlan`, expiredAt);
push(planData, `configDataSnapshot/${timeStr}`, expiredAt);
push({ stockSelections: stockSelections }, `stockSelections/${timeStr}`, shortExpiredAt);

console.log(data);
console.log(stockSelections);
