const https = require("https")
module.exports.init = class httpserver{
    constructor(express, config){
       // console.log(express)
        this.application = express()
        this.port = config.port
		this.certs = config.certs
        this.listen(this.application, this.port, express, this.certs)
    }
    listen(application, port, express, certs){
        application.use(express.json())
        application.use(express.urlencoded({ extended: true }))
        application.listen(port, () => {
            // need a logger
            console.log(`[Server] On Port: ${port}`)
        })

        return application

    }
}
