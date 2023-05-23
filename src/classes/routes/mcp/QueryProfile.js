module.exports = new class profile {
    constructor() {
        this.application = require("express").Router();
        this.user = require("../../../model/User")
        this.fs = require("fs")
        this.path = require("path")
        this.files = []
        this.endpoints()
    }
    endpoints() {
        // THIS SHOULD BE LAST :eyes:
        this.application.all("/fortnite/api/game/v2/profile/:accountId/*/QueryProfile", async (req, res) => {
            const rvn = req.query.rvn;
            const accountId = req.params.accountId
            const profileID = req.query.profileId;
            const Account = await this.user.findOne({ "accountId": accountId }).lean();
            console.log(accountId)
            console.log(Account)
            if (!Account) return res.json({ "error": "This Account Is Not Found :(" })

            if (profileID == "athena") {

            } else if (profileID == "common_core" | "common_public") {


            } else {
                var retJSON = {
                    profileRevision: rvn + 1,
                    profileId: profileID,
                    profileChangesBaseRevision: 1,
                    profileChanges: [],
                    profileCommandRevision: 1,
                    serverTime: new Date(),
                    responseVersion: 1
                }
                res.json(retJSON)
            }

        })
    }
}