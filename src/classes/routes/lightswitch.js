module.exports = new class lightswitch{
    constructor(){
        this.application = require("express").Router();
        this.user = require("../../model/User")
        this.endpoints()
    }
    endpoints(){
        this.application.get("/lightswitch/api/service/bulk/status", async (req,res) => {
            console.log(req.headers)
            const token = req.headers["authorization"].split("bearer ")[1]
            if(token){
                var Account = this.user.findOne({ ["accessToken[0].token"]: token})
                res.json(  [{
                    "serviceInstanceId": "fortnite",
                    "status": "UP",
                    "message": "servers up.",
                    "maintenanceUri": "https://eonfn.dev",
                    "overrideCatalogIds": [],
                    "allowedActions": [
                        "PLAY",
                        "DOWNLOAD"
                    ],
                    "banned": Account.banned,
                    "launcherInfoDTO": {}
                }])
            }else{
                res.status(403)
            }
        })
        this.application.get("/waitingroom/api/waitingroom", async (req,res) => {
            res.status(204).end()
        })
    }
}