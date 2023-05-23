module.exports = new class profile{
    constructor(){
        this.application = require("express").Router();
        this.user = require("../../../model/User")
        this.fs = require("fs")
        this.path = require("path")
        this.files = []
        this.endpoints()
    } 
    endpoints(){
        // If this is a 1:1 backend then is this needed
       /* this.application.all("/fortnite/api/game/v2/profile/:accountId/client/:command", async (req, res) => {
            const rvn = req.query.rvn;
            const profileID = req.query.profileId;
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
        })*/
    }
}