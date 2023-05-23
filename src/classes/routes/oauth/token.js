module.exports = new class Token{
    constructor(){
        this.application = require("express").Router();
        this.jwt = require("jsonwebtoken")
        this.user = require("../../../model/User")
        this.jwt = require("jsonwebtoken")
        this.crypto = require("crypto")
        this.bcrypt = require("bcrypt")
        this.grantType = "";
        this.clientId = "";
        this.ip = "";
        this.clientToken = "";
        this.accessToken = "";
        this.refreshToken = "";
        this.token = "";
        this.token69()
    }   
    token69(){
        this.application.all("/account/api/oauth/token", async (req, res) => {
            try {
                var displayName = req.body.username
                var accountid = "";
                console.log(req.body.grant_type)
                this.grantType = req.body.grant_type

                if (!this.grantType) {
                    return res.json({
                        "errorCode": "errors.com.epicgames.common.oauth.unsupported_grant_type",
                        "message": `Not even NAH`,
                    })
                }
                console.log("dgs")
                this.clientId = Buffer.from(req.headers["authorization"].split(" ")[1], "base64").toString().split(":")[0]

                if (!this.clientId) {
                    return res.status(400).json({
                        "errorCode": "errors.com.epicgames.common.oauth.invalid_client",
                        "message": "It appears that your Authorization header may be invalid or not present, please verify that you are sending the correct headers."
                    })
                }

                console.log("E", this.clientId)
                console.log(this.grantType)
                if (this.grantType == "password") {
                    var UsernameCheck = await this.user.findOne({ email: req.body.username }).lean();

                    if (UsernameCheck) {
                        // without this check it would login without the password :ohnu:
                        if (this.bcrypt.compareSync(req.body.password, UsernameCheck.password)) {
                            displayName = UsernameCheck.displayName
                            accountid = UsernameCheck.accountId
                        } else {
                            return res.status(400).json({
                                "errorCode": "errors.com.epicgames.account.invalid_account_credentials",
                                "errorMessage": "Your e-mail and/or password are incorrect. Please check them and try again.",
                                "messageVars": [],
                                "numericErrorCode": 18031,
                                "originatingService": "any",
                                "intent": "prod",
                                "error_description": "Your e-mail and/or password are incorrect. Please check them and try again.",
                                "error": "invalid_grant"
                            })
                        }
                    } else {
                        return res.status(400).json({
                            "errorCode": "errors.com.epicgames.account.invalid_account_credentials",
                            "errorMessage": "Your e-mail and/or password are incorrect. Please check them and try again.",
                            "messageVars": [],
                            "numericErrorCode": 18031,
                            "originatingService": "any",
                            "intent": "prod",
                            "error_description": "Your e-mail and/or password are incorrect. Please check them and try again.",
                            "error": "invalid_grant"
                        })
                    }
                }

                if (this.grantType == "client_credentials") {
                    this.ip = req.ip
                    this.token = await this.user.findOne({ "clientToken": { $exists: true } })

                    if (this.token) {
                        if (this.token.clientToken.find(x => x.ip == this.ip)) {
                            // let clientTokenIndex = this.clientToken.findIndex(x => x.ip == this.ip)
                            await this.token.updateOne({ "clientToken": [] })
                        }
                    }

                    this.clientToken = this.jwt.sign({
                        p: this.crypto.randomBytes(128).toString("base64"),
                        clsvc: "fortnite",
                        t: "s",
                        mver: false,
                        clid: this.clientId,
                        ic: true,
                        exp: Math.floor(Date.now() / 1000) + (240 * 240),
                        am: "client_credentials",
                        iat: Math.floor(Date.now() / 1000),
                        jti: this.crypto.randomBytes(32).toString("hex")
                    }, "eleon")


                    await this.token.updateOne({ $push: { "clientToken": { "token": `eg1~${this.clientToken}`, "ip": this.ip } } })

                    console.log("test", {
                        access_token: `eg1~${this.clientToken}`,
                        expires_in: 28800,
                        expires_at: new Date(new Date().getTime() + (4 * 60 * 60 * 1000)).toISOString(),
                        token_type: "bearer",
                        client_id: this.clientId,
                        internal_client: true,
                        client_service: "fortnite"
                    })

    


                    res.json({
                        access_token: `eg1~${this.newToken}`,
                        expires_in: 28800,
                        expires_at: new Date(new Date().getTime() + (4 * 60 * 60 * 1000)).toISOString(),
                        token_type: "bearer",
                        client_id: this.clientId,
                        internal_client: true,
                        client_service: "fortnite"
                    });
                    return
                }

                this.token = await this.user.findOne({ accessToken: { $exists: true }, refreshToken: { $exists: true }, clientToken: { $exists: true } });

                if (this.token) {
                    if (this.token.accessToken.find(x => x.ip == this.ip)) {
                        await this.token.updateOne({ "accessToken": [] })
                    }
                    if (this.token.refreshToken.find(x => x.ip == this.ip)) {
                        await this.token.updateOne({ "refreshToken": [] })
                    }
                }

                this.refreshToken = this.jwt.sign({
                    sub: accountid,
                    t: "r",
                    clid: this.clientId,
                    exp: Math.floor(Date.now() / 1000) + (1920 * 1920),
                    am: this.grantType,
                    jti: this.crypto.randomBytes(32).toString("hex")
                }, "eleon")

                this.accessToken = this.jwt.sign({
                    app: "fortnite",
                    sub: accountid,
                    mver: false,
                    clid: this.clientId,
                    dn: displayName,
                    am: this.grantType,
                    p: this.crypto.randomBytes(256).toString("base64"),
                    iai: accountid,
                    clsvc: "fortnite",
                    t: "s",
                    ic: true,
                    exp: Math.floor(Date.now() / 1000) + (480 * 480),
                    iat: Math.floor(Date.now() / 1000),
                    jti: this.crypto.randomBytes(32).toString("hex")
                }, "eleon")

                await this.token.updateOne({ $push: { "accessToken": { "token": `eg1~${this.accessToken}`, "ip": this.ip } } })
                await this.token.updateOne({ $push: { "refreshToken": { "token": `eg1~${this.refreshToken}`, "ip": this.ip } } })
                console.log("test2", {
                    "access_token": `eg1~${this.accessToken}`,
                    "expires_in": 28800,
                    "expires_at": new Date(new Date().getTime() + (8 * 60 * 60 * 1000)).toISOString(),
                    "token_type": "bearer",
                    "account_id": accountid,
                    "client_id": this.clientId,
                    "internal_client": true,
                    "client_service": "fortnite",
                    "refresh_token": `eg1~${this.refreshToken}`,
                    "refresh_expires": 115200,
                    "refresh_expires_at": new Date(new Date().getTime() + (32 * 60 * 60 * 1000)).toISOString(),
                    "displayName": displayName,
                    "app": "fortnite",
                    "in_app_id": accountid,
                    "device_id": "5dcab5dbe86a7344b061ba57cdb33c4f"
                })
                res.json({
                    "access_token": `eg1~${this.accessToken}`,
                    "expires_in": 28800,
                    "expires_at": new Date(new Date().getTime() + (8 * 60 * 60 * 1000)).toISOString(),
                    "token_type": "bearer",
                    "account_id": accountid,
                    "client_id": this.clientId,
                    "internal_client": true,
                    "client_service": "fortnite",
                    "refresh_token": `eg1~${this.refreshToken}`,
                    "refresh_expires": 115200,
                    "refresh_expires_at": new Date(new Date().getTime() + (32 * 60 * 60 * 1000)).toISOString(),
                    "displayName": displayName,
                    "app": "fortnite",
                    "in_app_id": accountid,
                    "device_id": "5dcab5dbe86a7344b061ba57cdb33c4f"
                })
            } catch (err) {
                console.log(err)
                res.status(400).json({
                    "errorCode": "errors.com.epicgames.account_token.not_found",
                    "message": "Seems Like Theres a Error Please Report This to us!"
                })
            }
        })
    }
}