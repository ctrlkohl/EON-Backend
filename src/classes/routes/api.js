module.exports = new class api{
    constructor(){
        this.application = require("express").Router();
        this.user = require("../../model/User")
        this.endpoints()
    } 
    endpoints(){
        this.application.get("/fortnite/api/v2/versioncheck/:version", (req, res) => {
            res.json({
                "type": "NO_UPDATE"
            })
        })

        this.application.get("/account/api/public/account/:accountId", async (req,res) => {
            var Account = await this.user.findOne({ accountId: req.params.accountId }).lean();
            if(Account){
                if(Account.banned == true){
                    res.json({})
                }else{
                    res.json({
                        "id": Account.accountId,
                        "displayName": Account.displayName,
                        "name": Account.displayName,
                        "email": Account.email,
                        "failedLoginAttempts": 0,
                        "lastLogin": new Date().toISOString(),
                        "numberOfDisplayNameChanges": 0,
                        "ageGroup": "UNKNOWN",
                        "headless": false,
                        "country": "US",
                        "lastName": "User",
                        "links": {},
                        "preferredLanguage": "en",
                        "canUpdateDisplayName": false,
                        "tfaEnabled": true,
                        "emailVerified": true,
                        "minorVerified": true,
                        "minorExpected": true,
                        "minorStatus": "UNKNOWN"
                    })
                }
            }else{
                res.json({})
            }
        })

        this.application.get("/account/api/public/account", async (req,res) => {
            const accountId = req.query.accountId

            var Data = []
            if(Array.isArray(accountId)){
                for(const index of accountId){
                    var Accounts = await this.user.findOne({ accountId: index })
                    if(Accounts){
                        Data.push({
                            "id": index,
                            "displayName": Accounts.displayName,
                            "externalAuts": {}
                        })
                    }
                }
            }else{
                var Accounts = await this.user.findOne({ accountId: accountId })
                if(Accounts){
                    Data.push({
                        "id": Accounts.accountId,
                        "links": {},
                        "displayName": Accounts.displayName,
                        "cabinedMode": false,
                        "externalAuths": {}
                    })
                }
            }

            res.json(Data)
        })

        this.application.get("/account/api/public/account/:accountId/externalAuths", async (req, res) => {
            res.json([])
        });

        this.application.all('/fortnite/api/game/v2/tryPlayOnPlatform/account/*', (req, res) => {
            res.setHeader('Content-Type', 'text/plain').send(true).end();
        })

        this.application.get("/fortnite/api/game/v2/enabled_features", (req, res) => {
            res.json([])
        })

        this.application.post("/fortnite/api/game/v2/grant_access/*", (req, res) => {
            res.json({}).status(204).end();
        })
    }  
}