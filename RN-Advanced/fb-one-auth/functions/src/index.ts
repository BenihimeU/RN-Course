import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { createUser } from './auth-manage/create-user';

import * as secret from '../service_account.json';
import { generateOTP } from './auth-manage/otp';
import { verifyOTP } from './auth-manage/verify-otp';

const serviveAccount = <any>secret;
admin.initializeApp({
  credential: admin.credential.cert(serviveAccount),
  databaseURL: "https://fb-one-auth.firebaseio.com"
});
export const addUser = functions.https.onRequest(createUser);
export const requestOneTimePassword = functions.https.onRequest(generateOTP);
export const verifyOneTimePassword = functions.https.onRequest(verifyOTP);