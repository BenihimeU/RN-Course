import * as admin from 'firebase-admin';

export const verifyOTP = (req, res) => {
  if (!req.body.phone && !req.body.code) {
    return res.status(422).send({ error: 'Please send phoen no and OTP you recieved' })
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, '');
  const code = parseInt(req.body.code);

  admin.auth().getUser(phone)
    .then(userRecord => {
      const databaseRef = admin.database().ref(`users/${phone}/`);
      databaseRef.on('value', snapshot => {
        databaseRef.off();
        const user = snapshot.val();
        if ((user.code !== code) || !user.isValid) {
          return res.status(422).send({ error: 'OTP is not valid' })
        }
        databaseRef.update({ isValid: false });
        admin.auth().createCustomToken(userRecord.uid)
          .then(token => {
            return res.status(200).send({ uid: userRecord.uid, token });
          })

      });
    })
    .catch(error => {
      res.status(422).send({ error });
    })
}