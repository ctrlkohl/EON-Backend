
module.exports.init = class generateItemShop {
    constructor(config) {
        const fs = require("fs")
        const { EmbedBuilder, WebhookClient } = require('discord.js');
        console.log(config.itemshopweb.id)
        const webhookClient = new WebhookClient({ id: config.itemshopweb.id, token: config.itemshopweb.token });
        const path = require("path")
        const date = new Date()
        const crypto = require("crypto")
        const base64url = require('base64url')
        // item shop generator may have some battle pass stuff!
        const skins = require("../../resources/json/shop/skins.json")
        const emote = require("../../resources/json/shop/emotes.json")
        const skin = {
            "uncommon": 800,
            "rare": 1200,
            "epic": 1500,
            "legendary": 2000,
            "dark": 800,
            "dc": 1200,
            "gaminglegends": 1200,
            "frozen": 1200
        }
        const pickaxe = {
            "uncommon": 500,
            "rare": 800
        }
        const glider = {
            "uncommon": 500
        }

        const wrap = {
            "uncommon": 300,
            "rare": 500
        }
        const emotes = {
            "uncommon": 200,
            "rare": 500,
            "epic": 800,
            "icon": 500,
            "marvel": 500
        }


        // legendary with backbling is 2000
        // epic skins with backbling is 1500
        var Item1 = {
            JSON: {},
            Price: 999999999999999999999999,
        }
        var Item2 = {
            JSON: {},
            Price: 999999999999999999999999,
        }
        var Item3 = {
            JSON: {},
            Price: 999999999999999999999999,
        }
        var Item4 = {
            JSON: {},
            Price: 999999999999999999999999,
        }
        var Item5 = {
            JSON: {},
            Price: 999999999999999999999999,
        }
        var Item6 = {
            JSON: {},
            Price: 999999999999999999999999,
        }
        var Item7 = {
            JSON: {},
            Price: 999999999999999999999999,
        }
        var Item8 = {
            JSON: {},
            Price: 999999999999999999999999,
        }
        var Skinoremote = ["skin", "emote", "skin"]
        var Skinoremotev2 = ["emote", "emote", "skin"]

        function regenerate(Item, Type, Rare) {
            if ("skin" == Rare[Math.floor(Math.random() * Rare.length)]) {
                Item.JSON = skins[Math.floor(Math.random() * skins.length)]
                Item.Price = skin[Item.JSON.rarity]
            } else {
                Item.JSON = emote[Math.floor(Math.random() * emote.length)]
                if (Type == "Weekly") {
                    if (emotes[Item.JSON.rarity] == 200) {
                        regenerate(Item, Type, Rare)
                    } else {
                        Item.Price = emotes[Item.JSON.rarity]
                    }
                } else {
                    Item.Price = emotes[Item.JSON.rarity]
                }
            }
        }



        // Easy To Change How This Works
        regenerate(Item1, "Weekly", Skinoremote)
        regenerate(Item2, "Weekly", Skinoremote)
        regenerate(Item3, "Daily", Skinoremotev2)
        regenerate(Item4, "Daily", Skinoremote)
        regenerate(Item5, "Daily", Skinoremote)
        regenerate(Item6, "Daily", Skinoremotev2)
        regenerate(Item7, "Daily", Skinoremotev2)
        regenerate(Item8, "Daily", Skinoremote)

        const shop = {
            "expiration": new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1, 17, 0, 0).toISOString(),
            "cacheExpire": new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1, 16, 57, 14, 490).toISOString(),
            "ShopItems":
            {
                "Weekly": [
                    {
                        "id": base64url(crypto.randomBytes(20).toString('hex')),
                        "item": Item1.JSON.item,
                        "name": Item1.JSON.name || "Unknown",
                        "items": Item1.JSON.items,
                        "price": Item1.Price,
                        "rare": Item1.JSON.rarity
                    },
                    {
                        "id": base64url(crypto.randomBytes(20).toString('hex')),
                        "item": Item2.JSON.item,
                        "name": Item2.JSON.name || "Unknown",
                        "items": Item2.JSON.items,
                        "price": Item2.Price,
                        "rare": Item2.JSON.rarity
                    }
                ],
                "Daily": [
                    {
                        "id": base64url(crypto.randomBytes(20).toString('hex')),
                        "item": Item3.JSON.item,
                        "name": Item3.JSON.name || "Unknown",
                        "items": Item3.JSON.items,
                        "price": Item3.Price,
                        "rare": Item3.JSON.rarity
                    },
                    {
                        "id": base64url(crypto.randomBytes(20).toString('hex')),
                        "item": Item4.JSON.item,
                        "name": Item4.JSON.name || "Unknown",
                        "items": Item4.JSON.items,
                        "price": Item4.Price,
                        "rare": Item4.JSON.rarity
                    },
                    {
                        "id": base64url(crypto.randomBytes(20).toString('hex')),
                        "item": Item5.JSON.item,
                        "name": Item5.JSON.name || "Unknown",
                        "items": Item5.JSON.tems,
                        "price": Item5.Price,
                        "rare": Item5.JSON.rarity
                    },
                    {
                        "id": base64url(crypto.randomBytes(20).toString('hex')),
                        "item": Item6.JSON.item,
                        "name": Item6.JSON.name || "Unknown",
                        "items": Item6.JSON.items,
                        "price": Item6.Price,
                        "rare": Item6.JSON.rarity
                    },
                    {
                        "id": base64url(crypto.randomBytes(20).toString('hex')),
                        "item": Item7.JSON.item,
                        "name": Item7.JSON.name || "Unknown",
                        "items": Item7.JSON.items,
                        "price": Item7.Price,
                        "rare": Item7.JSON.rarity
                    },
                    {
                        "id": base64url(crypto.randomBytes(20).toString('hex')),
                        "item": Item8.JSON.item,
                        "name": Item8.JSON.name || "Unknown",
                        "items": Item8.items,
                        "price": Item8.JSON.Price,
                        "rare": Item8.JSON.rarity
                    }
                ]
            }
        }

        fs.writeFileSync(path.join(__dirname, "../../resources/json/shop/shop.json"), JSON.stringify(shop))

        const embed = new EmbedBuilder()
            .setTitle('Weekly:')
            .addFields(
                { name: Item1.JSON.name || "Unknown", value: `${Item1.Price}` },
                { name: Item2.JSON.name || "Unknown", value: `${Item2.Price}` }
            )
            .setColor(0x00FFFF);

        const embed2 = new EmbedBuilder()
            .setTitle('Daily:')
            .addFields(
                { name: Item3.JSON.name || "Unknown", value: `${Item3.Price}` },
                { name: Item4.JSON.name || "Unknown", value: `${Item4.Price}` },
                { name: Item5.JSON.name || "Unknown", value: `${Item5.Price}` },
                { name: Item6.JSON.name || "Unknown", value: `${Item6.Price}` },
                { name: Item7.JSON.name || "Unknown", value: `${Item7.Price}` },
                { name: Item8.JSON.name || "Unknown", value: `${Item8.Price}` }
            )
            .setFooter({ text: "We will add Pickaxes In The Future!" })
            .setColor(0x00FFFF);

          webhookClient.send({
              content: '',
              username: 'Item Shop',
              avatarURL: '',
              embeds: [embed],
          });
  
          webhookClient.send({
              content: '',
              username: 'Item Shop',
              avatarURL: '',
              embeds: [embed2],
          });
        console.log(shop)



    }
}
