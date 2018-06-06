"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const create_user_1 = require("./auth-manage/create-user");
const secret = require("../service_account.json");
const otp_1 = require("./auth-manage/otp");
const verify_otp_1 = require("./auth-manage/verify-otp");
const serviveAccount = secret;
admin.initializeApp({
    credential: admin.credential.cert(serviveAccount),
    databaseURL: "https://fb-one-auth.firebaseio.com"
});
exports.addUser = functions.https.onRequest(create_user_1.createUser);
exports.requestOneTimePassword = functions.https.onRequest(otp_1.generateOTP);
exports.verifyOneTimePassword = functions.https.onRequest(verify_otp_1.verifyOTP);
//# sourceMappingURL=index.js.map