module.exports = new class Verify{
    constructor(){
        this.application = require("express").Router();
        this.jwt = require("jsonwebtoken")

        this.verify(this.application, this.jwt)
    }   
    verify(application, jwt){
        application.get("/account/api/oauth/verify", (req,res) => {
            const token = req.headers["authorization"].split("bearer ")[1]
            const accesstoken = token.replace("eg1~", "") // since the og token didnt hav eg1~
            const decodedtoken = jwt.decode(accesstoken)
            
            res.json({
                "token": token,
                "session_id": decodedtoken["jti"],
                "token_type": "bearer",
                "client_id": decodedtoken["clid"],
                "internal_client": true,
                "client_service": "fortnite",
                "account_id": req.accountId,
                "expires_in": 28800,
                "expires_at": new Date(new Date().getTime() + (8 * 60 * 60 * 1000)).toISOString(),
                "auth_method": decodedtoken["am"],
                "display_name": req.displayname,
                "app": "fortnite",
                "in_app_id": req.accountId,
                "device_id": decodedtoken["dvid"]
            })
        })
    }
}