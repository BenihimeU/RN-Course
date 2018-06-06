"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const twilio_1 = require("./twilio");
const admin = require("firebase-admin");
exports.generateOTP = (req, res) => {
    if (!req.body && !req.body.phone) {
        return res.status(422).send({ 'error': 'Enter valid verified phone no' });
    }
    const phone = String(req.body.phone).replace(/[^\d]/g, '');
    admin.auth().getUser(phone)
        .then(userRecord => {
        const code = Math.floor((Math.random() * 8999 + 1000));
        twilio_1.Twilio.messages.create({
            body: `Your One Time Password for demo Login is - ${code}`,
            to: '+' + phone,
            from: '+17868375279'
        }, (err) => {
            if (err) {
                return res.status(422).send({ error: err });
            }
            admin.database().ref(`users/${phone}`).update({ code, isValid: true }, () => {
                res.send({ success: true });
            });
        })
            .catch(error => {
            return res.status(422).send({ error });
        });
    })
        .catch(error => {
        res.status(422).send({ error });
    });
};
//# sourceMappingURL=otp.js.map