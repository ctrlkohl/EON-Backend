module.exports = new class Kill {
    constructor() {
        this.application = require("express").Router();
        this.user = require("../../../model/User")
        this.kill()
    }
    kill() {
        this.application.delete("/account/api/oauth/sessions/kill/:accessToken", async (req, res) => {
            //  console.log(res.body)
            //    console.log(req.headers)
            //var token = req.headers["authorization"].split("bearer ")[1];

            //  if(token){
            // console.log( req.params.accessToken)
            this.token = await this.user.findOne({ ["accessToken.token"]: req.params.accessToken })
            console.log(this.token)
            if (this.token) {
                await this.token.updateOne({ "accessToken": [] })
                await this.token.updateOne({ "refreshToken": [] })
                await this.token.updateOne({ "clientToken": [] })
                res.status(204).end()
            } else {
                res.json({
                    "errorCode": "errors.com.epicgames.account.auth_token.unknown_oauth_session",
                    "errorMessage": `Sorry we could not find the auth session '${req.params.accessToken}'`,
                    "messageVars": [req.params.accessToken],
                    "numericErrorCode": 18051,
                    "originatingService": "any",
                    "intent": "prod",
                    "error_description": `Sorry we could not find the auth session '${req.params.accessToken}'`,
                    "error": "com.epicgames.account.public"
                }) // error ig
            }
        })
    }
}