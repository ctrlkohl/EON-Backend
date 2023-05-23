

module.exports.init = class mongodb{
    constructor(mongoose, config){
       this.start(mongoose,config)
    }
    async start(mongoose, config){
         await mongoose.connect(config.mongodb, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(() => {
            console.log("[Mongoose] Connected!")

       
        }).catch((err) => {
            console.log(`[Mongoose] Failed -> ${err}`)
        })
    }
}
