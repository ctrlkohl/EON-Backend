module.exports = new class keychain{
    constructor(){
        this.application = require("express").Router();
        this.endpoint()
    }
    endpoint(){
        this.application.get("/fortnite/api/storefront/v2/keychain", (req, res) => {
            // when your lazy
            res.json(require("../../../resources/json/keychain.json"))
            res.status(200);
        })
    }
}