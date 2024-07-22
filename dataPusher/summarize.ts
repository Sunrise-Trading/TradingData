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
let stockTradingPlans = Data.stocksTradingPlans;
let stockSelections = Data.stockSelections;

stockTradingPlans.forEach(plan => {
    let symbol = plan.symbol;
    if (!stockSelections.includes(symbol)) {
        return;
    }
    let analysis = plan.analysis;
    let msg = `${symbol}\n`;
    msg += `ATR: $${plan.atr.average}, gap size: $${analysis.gapSize}.\n`;
    msg += `Weekly chart: ${analysis.weeklychart}.\n`;
    msg += `Daily chart: ${analysis.dailyChart}.\n`;
    msg += `Hourly chart: ${analysis.hourlyChart}.\n`;
    msg += `Premarket chart: ${analysis.premarketChart}.\n`;
    msg += `Reasons for long:\n`;
    plan.long.reasons.forEach(reason => {
        msg += `* ${reason}`;
    });
    msg += `Reasons for short:\n`;
    plan.short.reasons.forEach(reason => {
        msg += `* ${reason}`;
    });


    console.log(msg);
});

