

module.exports.init = class filemanager {
    constructor(file, fs, path, application) {
        console.log(application.application)


        application.use((req, res, next) => {
            console.log(`[New Request] ${req.method} ${req.url}`)
            next()
        })
        try {
            fs.readdirSync(path.join(__dirname, "../routes")).filter(async function (mainFiles) {
                if (mainFiles.endsWith(".js")) {
                    await application.use(require(`../routes/${mainFiles}`).application)
                } else {
                    if (fs.readdirSync(path.join(__dirname, `../routes/${mainFiles}`))) {
                        fs.readdirSync(path.join(__dirname, `../routes/${mainFiles}`)).filter(async function (sidefiles) {
                            fs.readdir(path.join(__dirname, `../routes/${mainFiles}/${sidefiles}`), async function (err, files) {
                                /////
                                if(err){
                                    await application.use(require(`../routes/${mainFiles}/${sidefiles}`).application)
                                }else{
                                    // no error so no running yay
                                }
                        })
                        })
                    } else {
                        console.log(`Failed To ${mainFiles}`)
                    }
                }
            })
        } catch (err) {
            console.log("Error", err)
        }
    }
}
