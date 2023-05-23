module.exports = new class Timeline {
    constructor() {
        this.application = require("express").Router();
        this.season = 0
        this.useragent = "";
        this.date
        this.application = require("express").Router()
        this.fs = require("fs")
        this.path = require("path")
        this.endpoints(this.application, this.maintenanceUri, this.useragent)
    }
    endpoints(application, maintenanceUri, useragent) {
        const ItemShopItem = JSON.parse(this.fs.readFileSync(this.path.join(__dirname, "../../resources/json/shop/shop.json")))
        this.application.get("/fortnite/api/calendar/v1/timeline", (req, res) => {
            this.useragent = req.headers["user-agent"]
            this.date = new Date()

            if (this.useragent) {
                try {
                    this.season = this.useragent.split("-")[1].split(".")[0]
                } catch {
                    this.season = 2
                }
            } else {
                this.season = 2
            }

            console.log(this.date.getHours())
            res.json({
                "channels": {
                    "standalone-store": {
                        "states": [
                            {
                                "validFrom": "2019-05-21T18:36:38.383Z",
                                "activeEvents": [],
                                "state": {
                                    "activePurchaseLimitingEventIds": [],
                                    "storefront": {},
                                    "rmtPromotionConfig": [],
                                    "storeEnd": "0001-01-01T00:00:00.000Z"
                                },
                            }
                        ],
                        "cacheExpire": ItemShopItem.cacheExpire
                    },
                    "client-matchmaking": {
                        "states": [],
                        "cacheExpire": ItemShopItem.cacheExpire
                    },
                    "tk": {},
                    "featured-islands": {},
                    "community-votes": {},
                    "client-events": {
                        "states": [{
                            "validFrom": "2019-05-21T18:36:38.383Z",
                            "activeEvents": [
                                {
                                    "eventType": `EventFlag.LobbySeason${this.season}`,
                                    "activeUntil": "9999-12-31T23:59:59.999Z",
                                    "activeSince": "2019-12-31T23:59:59.999Z"
                                }
                            ],
                            "state": {
                                "activeStorefronts": [],
                                "eventNamedWeights": {},
                                "activeEvents": [],
                                "seasonNumber": this.season,
                                "seasonTemplateId": `AthenaSeason:athenaseason${this.season}`,
                                "matchXpBonusPoints": 0,
                                "eventPunchCardTemplateId": "",
                                "seasonBegin": "0000-12-31T23:59:59.999Z",
                                "seasonEnd": "9999-12-31T23:59:59.999Z",
                                "seasonDisplayedEnd": "9999-12-31T23:59:59.999Z",
                                "weeklyStoreEnd": ItemShopItem.expiration,
                                "stwEventStoreEnd": "9999-12-31T23:59:59.999Z",
                                "stwWeeklyStoreEnd": "9999-12-31T23:59:59.999Z",
                                "sectionStoreEnds": {
                                    "Featured": ItemShopItem.expiration,
                                    "Daily": ItemShopItem.expiration,
                                },
                                "dailyStoreEnd": ItemShopItem.expiration
                            }
                        }],
                        "cacheExpire": ItemShopItem.cacheExpire
                    }
                },
                "cacheIntervalMins": 15,
                "currentTime": new Date()
            })
        })
    }
}