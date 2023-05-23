module.exports = new class cloudstorage{
    constructor(){
        this.application = require("express").Router();
        this.user = require("../../model/User")
        this.fs = require("fs")
        this.path = require("path")
        this.files = []
        this.endpoints()
    } 
    endpoints(){
        this.application.get("/fortnite/api/cloudstorage/system", (req, res) => {
            this.files = []
            res.setHeader('content-type', 'application/json');
            this.fs.readdirSync(this.path.join(__dirname, `../../resources/ini`)).filter(async function (mainFiles) {
                if (mainFiles.endsWith(".ini")) {
                    files.push({
                        "uniqueFilename": mainFiles,
                        "filename": mainFiles,
                        "hash": "603E6907398C7E74E25C0AE8EC3A03FFAC7C9BB4",
                        "hash256": "973124FFC4A03E66D6A4458E587D5D6146F71FC57F359C8D516E0B12A50AB0D9",
                        "length": this.fs.readFileSync(this.path.join(__dirname,`../../resources/ini/${mainFiles}`)).length,
                        "contentType": "text/plain",
                        "uploaded": "9999-9999-9999",
                        "storageType": "S3",
                        "doNotCache": false
                    })
                }
            })
            res.json(this.files).status(200);
        })
    }  
}