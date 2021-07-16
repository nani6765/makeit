const functions = require("firebase-functions");
const admin = require("firebase-admin");
var serviceAccount = require("./jaewon.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://makeit-f9791-default-rtdb.asia-southeast1.firebasedatabase.app",
});

function dataWrite(uid) {
  admin.auth().setCustomUserClaims(uid, { admin: true });
}

module.exports = dataWrite;
