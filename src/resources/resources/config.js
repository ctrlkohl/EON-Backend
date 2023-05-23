var fs = require('fs');
const path = require("path")

module.exports.config = {
     "port": 5436,
     "mongodb": "mongodb+srv://hHlSCXx9XolgHouu:s7QcViStlXKAQkzq@cluster0.1zgb1qe.mongodb.net/PlutoFN?retryWrites=true&w=majority",
     "itemshopweb": {
          "id": "1093632458332831744",
          "token": "fU89LAgR_gwm5XAZpL9a0Kox89UCkjoSFxGxWEpFwKxoxR1VP-2TcM8mRWjtZH8gFG1U"
     },
	 "certs": {
		 key: fs.readFileSync(path.join(__dirname, '../private/key.pem'), {encoding:'utf8'}),
		 cert: fs.readFileSync(path.join(__dirname, '../private/certificate.pem'), {encoding:'utf8'})
	 }
}
