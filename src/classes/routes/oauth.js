module.exports = new class Oauth {
    constructor() {
        this.application = require("express").Router();
        this.user = require("../../model/User")
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
        this.tokenapi();
    }
    tokenapi() {

        // need a recode soon maybe in functions since it looks very messy!
      

       
    }
}