const User = require("../../../../model/User")
const Account = require("../../../../model/Account")

async function AthenaFile(accountId, ProfileID){
    try{
        var Athena = await Account.findOne({ accountId: accountId }).lean().catch(e => next(e))

        if(Athena){
            var AthenaData = {
                "profileRevision": Athena.profilerevision,
                "profileId": ProfileID,
                "profileChangesBaseRevision": Athena.profilerevision,
                "profileChanges": [
                    {
                        "changeType": "fullProfileUpdate",
                        "_id": "RANDOM",
                        "profile": {
                            
                        }
                    }
                ],
                "serverTime": new Date().toISOString(),
                "profileCommandRevision": Athena.profilerevision,
                "responseVersion": 1
            }
        }else{
            var AthenaData = {
                "errorCode": "errors.com.epicgames.page.not_found",
                "message": "Looks Like That Isnt A Account Or The Accont Is Deleted"
            }
            return AthenaData
        }
    }catch(err){
        console.log(err)
    }
}