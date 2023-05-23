const { Schema, model } = require("mongoose")

const User = new Schema({
    "accountId": {
        type: String,
        required: true
    },
    "character": {
        "items": {
            type: String,
            default: ""
        },
        "activeVariants": {
            type: Array,
            default: []
        }
    },
    "backpack": {
        "items": {
            type: String,
            default: ""
        },
        "activeVariants": {
            type: Array,
            default: []
        }
    },
    "skydivecontrail": {
        "items": {
            type: String,
            default: ""
        },
        "activeVariants": {
            type: Array,
            default: []
        }
    },
    "dance": {
        "items": {
            type: Array,
            default: [
                "",
                "",
                "",
                "",
                "",
                "",
                ""
            ]
        },
        "activeVariants": {
            type: Array,
            default: []
        }
    },
    "loadingscreen": {
        "items": {
            type: String,
            default: ""
        },
        "activeVariants": {
            type: Array,
            default: []
        }
    },
    "musicpack": {
        "items": {
            type: String,
            default: ""
        },
        "activeVariants": {
            type: Array,
            default: []
        }
    },
    "pickaxe": {
        "items": {
            type: String,
            default: ""
        },
        "activeVariants": {
            type: Array,
            default: []
        }
    },
    "glider": {
        "items": {
            type: String,
            default: ""
        },
        "activeVariants": {
            type: Array,
            default: []
        }
    },
    "itemwrap": {
        "items": {
            type: Array,
            default: [
                "",
                "",
                "",
                "",
                "",
                "",
                ""
            ]
        },
        "activeVariants": {
            type: Array,
            default: []
        }
    },
    "banner": {
        "banner_icon": {
            type: String,
            default: "BRSeason01"
        },
        "banner_color": {
            type: String,
            default: "DefaultColor1"
        }
    },
    "level": {
        type: Number,
        default: 1
    },
    "vbucks": {
        type: Number,
        default: 1000
    },
    "battlestars": {
        type: Number,
        default: 500
    },
    "gold": {
        type: Number,
        default: 500
    },
    "omnichips": {
        type: Number,
        default: 500
    },
    "gifts": {
        type: Array,
        default: [{
            giftbox: "GiftBox:gb_mfareward",
            giftedAt: new Date().toISOString(),
            message: "Thanks For Playing Eon!",
            itemGuid: "EID_BoogieDown",
            items: [{
                templateId: "AthenaDance:EID_BoogieDown",
                profileId: "common_core",
                quantity: 1
            }]
        }]
    }
})

module.exports = model("Account", User)