import * as functions from "firebase-functions";

import * as cors from "cors";
const corsHandler = cors({ origin: true });

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request: functions.https.Request, response: functions.Response<any>) => {
  corsHandler(request, response, async () => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.set('Access-Control-Allow-Origin', '*');
    response.send("Hello from Firebase!");
  });
});
