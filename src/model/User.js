const { Schema, model } = require("mongoose")

const User = new Schema({
    "accountId": {
        type: String,
        required: true
    },
    "email": {
        type: String,
        required: true,
    },
    "username": {
        type: String,
        required: true
    },
    "timesincelastupdate": {
        type: Date,
        required: true
    },
    "password": {
        type: String,
        required: true,
    },
    "emailverifed": {
        type: Boolean,
        default: false
    },
    "currentplan": {
        type: Array
    },
    "acctoken": { // RESETS ON EVERY LOGIN
        type: String,
        required: true
    },
    "temptoken": { // THIS IS REQUIRED ON EVERY REQUEST BUT RESETS EVERY TIME (THIS HAS A ONE HOUR LIMIT)
        type: String,
        required: true
    }
   // "locationloggedin": { // this will be useful in the future
        //type: Array
  //  }
})

module.exports = model("User", User)