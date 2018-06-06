"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* **Note: Import service account */
const admin = require("firebase-admin");
exports.createUser = (req, res) => {
    // Verify user provided phone no
    if (!req.body || !req.body.phone) {
        return res.status(422).send({ "message": "User creation  failed" });
    }
    // Format phone no to remove all special charecters
    const phone = String(req.body.phone).replace(/[^\d]/g, "");
    // Crete new User using phoneno
    admin.auth().createUser({ uid: phone })
        .then((user) => {
        return res.status(200).send({ "message": "User created succesfully", user });
    })
        .catch(error => {
        return res.status(422).send({ "message": "User creation  failed", error });
    });
    // respond to user request
};
//# sourceMappingURL=create-user.js.map