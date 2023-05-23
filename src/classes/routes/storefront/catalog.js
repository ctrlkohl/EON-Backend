module.exports = new class Catalog {
    constructor() {
        this.application = require("express").Router()
        this.fs = require("fs")
        this.path = require("path")
        this.date = new Date()
        this.endpoint()
    }
    endpoint() {
        this.application.all("/fortnite/api/storefront/v2/catalog", (req, res) => {
            //require("../../../resources/json/itemshop.json")
            const ItemShopItem = JSON.parse(this.fs.readFileSync(this.path.join(__dirname, "../../../resources/json/shop/shop.json")))
            console.log(ItemShopItem)
            var TEST = {
                "refreshIntervalHrs": 24,
                "dailyPurchaseHrs": 24,
                "expiration": ItemShopItem.expiration,
                "storefronts": [
                    {
                        "name": "BRDailyStorefront",
                        "catalogEntries": []
                    },
                    {
                        "name": "BRWeeklyStorefront",
                        "catalogEntries": []
                    },
                    {
                        "name": "BRSeason10",
                        "catalogEntries": [
                            {
                                "offerId": "2E43CCD24C3BE8F5ABBDF28E233B9350",
                                "devName": "BR.Season10.BattlePass.01",
                                "offerType": "StaticPrice",
                                "prices": [
                                    {
                                        "currencyType": "MtxCurrency",
                                        "currencySubType": "",
                                        "regularPrice": 950,
                                        "dynamicRegularPrice": -1,
                                        "finalPrice": 950,
                                        "saleExpiration": "9999-12-31T23:59:59.999Z",
                                        "basePrice": 950
                                    }
                                ],
                                "categories": [],
                                "dailyLimit": -1,
                                "weeklyLimit": -1,
                                "monthlyLimit": -1,
                                "refundable": false,
                                "appStoreId": [
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    ""
                                ],
                                "requirements": [
                                    {
                                        "requirementType": "DenyOnFulfillment",
                                        "requiredId": "2E43CCD24C3BE8F5ABBDF28E233B9350",
                                        "minQuantity": 1
                                    }
                                ],
                                "metaInfo": [
                                    {
                                        "key": "Preroll",
                                        "value": "False"
                                    }
                                ],
                                "catalogGroup": "",
                                "catalogGroupPriority": 0,
                                "sortPriority": 1,
                                "title": {
                                    "de": "Battle Pass",
                                    "ru": "Боевой пропуск",
                                    "ko": "배틀패스",
                                    "zh-hant": "英雄季卡",
                                    "pt-br": "Passe de Batalha",
                                    "en": "Battle Pass",
                                    "it": "Pass battaglia",
                                    "fr": "Passe de combat",
                                    "zh-cn": "英雄季卡",
                                    "es": "Pase de batalla",
                                    "ar": "Battle Pass",
                                    "ja": "バトルパス",
                                    "pl": "Karnet bojowy",
                                    "es-419": "Pase de batalla",
                                    "tr": "Savaş Bileti"
                                },
                                "shortDescription": {
                                    "de": "Saison X",
                                    "ru": "Десятый сезон",
                                    "ko": "시즌 X",
                                    "zh-hant": "第十賽季",
                                    "pt-br": "Temporada X",
                                    "en": "Season X",
                                    "it": "Stagione X",
                                    "fr": "Saison X",
                                    "zh-cn": "第X赛季",
                                    "es": "Temporada X",
                                    "ar": "Season X",
                                    "ja": "シーズンX",
                                    "pl": "Sezon X",
                                    "es-419": "Temporada X",
                                    "tr": "X. Sezon"
                                },
                                "description": {
                                    "de": "Saison X – Ab sofort bis einschließlich 6. Oktober.\n\nErhalte sofort diese Gegenstände <Bold>im Wert von über 3.500 V-Bucks</>.\n  • <ItemName>X-Meister</> (Outfit)\n  • <ItemName>Catalyst</> (Outfit)\n  • <Bold>+50 %</> Saison-Match-EP\n  • <Bold>+60 %</> Saison-Match-EP für Freunde\n\nSpiele weiter und stufe deinen Battle Pass auf, um <Bold>über 100 Belohnungen</> freizuschalten (im Normalfall werden dafür 75 bis 150 Spielstunden benötigt).\n  • <ItemName>Ultimaritter</> und <Bold>4 weitere Outfits</>\n  • <Bold>1.300 V-Bucks</>\n  • 7 Emotes\n  • 6 Lackierungen\n  • 6 Erntewerkzeuge\n  • 1 Gefährte\n  • 7 Hängegleiter\n  • 7 Rücken-Accessoires\n  • 5 Kondensstreifen\n  • 17 Spraymotive\n  • 3 Musikstücke\n  • 1 Spielzeug\n  • 27 Ladebildschirme\n  • und noch eine ganze Menge mehr!\nDas dauert dir zu lange? Du kannst dir mit V-Bucks jederzeit Stufen kaufen!",
                                    "ru": "Десятый сезон: до 6 октября\n\nСразу же получите предметы <Bold>стоимостью более 3500 В-баксов!</>\n  • Экипировка <ItemName>Повелителя шипов</>;\n  • экипировка <ItemName>Тануки</>;\n  • <Bold>+50% к опыту</> за матчи сезона;\n  • <Bold>+60% к опыту</> друзей за матчи сезона.\n \nИграйте, повышайте уровень боевого пропуска — вас ждут <Bold>более 100 наград</>. Обычно, чтобы открыть все награды, требуется 75–150 часов игры.\n  • Экипировка <ItemName>Несокрушимого рыцаря</> и <Bold>ещё 4 костюма;</>\n  • <Bold>1300 В-баксов;</>\n  • 7 эмоций;\n  • 6 обёрток;\n  • 6 инструментов;\n  • 1 питомец;\n  • 7 дельтапланов;\n  • 7 украшений на спину;\n  • 5 воздушных следов;\n  • 17 граффити;\n  • 3 музыкальные композиции;\n  • 1 игрушка;\n  • 27 экранов загрузки\n    и это ещё не всё!\nНе хотите ждать? Уровни можно быстро получить за В-баксы!",
                                    "ko": "시즌 X: 10월 6일 종료\n\n<Bold>3,500 V-Bucks 이상의 가치</>가 있는 여러 아이템을 즉시 받아가세요.\n  • <ItemName>엑스로드</> 진화형 의상\n  • <ItemName>카탈리스트</> 진화형 의상\n  • <Bold>50% 보너스</> 시즌 매치 XP\n  • <Bold>60% 보너스</> 시즌 친구 매치 XP\n\n게임을 플레이하고 배틀패스 티어를 올려서 <Bold>100개 이상의 보상</>을 획득해보세요(보통 75-150시간 소요).\n  • <ItemName>최후의 기사</> 외 <Bold>의상 4개</>\n  • <Bold>1,300 V-Bucks</>\n  • 이모트 7개\n  • 외관 6개\n  • 수확 도구 6개\n  • 애완동물 1마리\n  • 글라이더 7개\n  • 등 장신구 6개\n  • 트레일 5개\n  • 스프레이 17개\n  • 음악 트랙 3개\n  • 장난감 1개\n  • 로딩 화면 27개\n  • 그 외 많은 혜택!\n더 빨리 보상을 얻고 싶으신가요? V-Bucks를 사용해서 언제든지 티어를 구매할 수 있습니다!",
                                    "zh-hant": "第十賽季：從現在開始至10月6日。\n\n立即獲得以下<Bold>價值逾3500V幣</>的物品。\n  • <ItemName>廢土領主-X</>服裝\n  • <ItemName>靈狸</>服裝\n  • <Bold>50%額外</>賽季匹配經驗\n  • <Bold>60%額外</>賽季好友匹配經驗\n\n通過遊玩提升英雄季卡戰階，解鎖<Bold>至少75個獎勵</>（通常需要75到150個小時的遊玩時間）。\n  • <ItemName>終極騎士</>和<Bold>4個額外服裝</>\n  • <Bold>1300V幣</>\n  • 7個姿勢\n  • 6個皮膚\n  • 6個採集工具\n  • 一個寵物\n  • 7個滑翔傘\n  • 7個背部裝飾\n  • 5滑翔軌跡\n  • 17個塗鴉\n  • 3個音軌\n  • 一個玩具\n  • 27個載入介面\n  • 以及更多獎勵！\nWant it all faster? You can useV幣 to buy tiers any time!",
                                    "pt-br": "Temporada X: de hoje até 6 de outubro.\n\nReceba instantaneamente estes itens <Bold>avaliados em mais de 3.500 V-Bucks</>.\n  • Traje <ItemName>Lorde X</>\n  • Traje <ItemName>Transcendental</>\n  • <Bold>50% de Bônus</> de EXP da Temporada em Partidas\n  • <Bold>60% de Bônus</> de EXP da Temporada em Partidas com Amigos\n\nJogue para subir o nível do seu Passe de Batalha, desbloqueando <Bold>mais de 100 recompensas</> (leva em média de 75 a 150 horas de jogo).\n  • <ItemName>Cavaleiro Supremo</> e <Bold>mais 4 Trajes</>\n  • <Bold>1.300 V-Bucks</>\n  • 7 Gestos\n  • 6 Envelopamentos\n  • 6 Ferramentas de Coleta\n  • 1 Mascote\n  • 7 Asas-deltas\n  • 7 Acessórios para as Costas\n  • 5 Rastros de Fumaça\n  • 17 Sprays\n  • 3 Faixas Musicais\n  • 1 Brinquedo\n  • 27 Telas de Carregamento\n  • e muito mais!\nQuer obter tudo mais rápido? Você pode comprar categorias com V-Bucks a qualquer hora!",
                                    "en": "Season X Now through October 6.\n\nInstantly get these items <Bold>valued at over 3,500 V-Bucks</>.\n  • <ItemName>X-Lord</> Outfit\n  • <ItemName>Catalyst</> Outfit\n  • <Bold>50% Bonus</> Season Match XP\n  • <Bold>60% Bonus</> Season Friend Match XP\n\nPlay to level up your Battle Pass, unlocking <Bold>over 100 rewards</> (typically takes 75 to 150 hours of play).\n  • <ItemName>Ultima Knight</> and <Bold>4 more Outfits</>\n  • <Bold>1,300 V-Bucks</>\n  • 7 Emotes\n  • 6 Wraps\n  • 6 Harvesting Tools\n  • 1 Pet\n  • 7 Gliders\n  • 7 Back Blings\n  • 5 Contrails\n  • 17 Sprays\n  • 3 Music Tracks\n  • 1 Toy\n  • 27 Loading Screens\n  • and so much more!\nWant it all faster? You can use V-Bucks to buy tiers any time!",
                                    "it": "Stagione X, da ora fino al 6 ottobre\n\nOttieni subito questi oggetti <Bold>dal valore di oltre 3.500 V-buck</>!\n • Costume <ItemName>Lord-X</>\n • Costume <ItemName>Catalizzatore</>\n • <Bold>Bonus 50%</> PE partite stagionali\n • <Bold>Bonus 60%</> PE amici partite stagionali\n\nGioca per aumentare il livello del tuo Pass battaglia, sbloccando <Bold>più di 100 ricompense</> (per un totale indicativo di 75-150 ore di gioco).\n • <ItemName>Cavaliere Ultima</> e <Bold>4 costumi in più</>\n • <Bold>1.300 V-Buck</>\n • 7 emote\n • 6 coperture\n • 6 strumenti raccolta\n • 1 piccolo amico\n • 7 deltaplani\n • 7 dorsi decorativi\n • 5 scie\n • 17 spray\n  • 3 brani musicali\n  • 1 giocattolo\n  • 27 schermate di caricamento\n  • E altro ancora!\nVuoi tutto e subito? Puoi acquistare livelli usando V-buck in qualsiasi momento!",
                                    "fr": "Saison X : jusqu'au 6 octobre.\n\nRecevez immédiatement ces objets <Bold>d'une valeur supérieure à 3500 V-bucks</>.\n  • Tenue <ItemName>Maître occulte</>\n  • Tenue <ItemName>Déclic</>\n  • Bonus d'EXP de saison de 50%\n  • Bonus d'EXP de saison de 60% pour des amis\n\nJouez pour augmenter le niveau de votre Passe de combat et déverrouiller <Bold>plus de 100 récompenses</> (nécessitant de 75 à 150 heures de jeu).\n  • <ItemName>Chevalier ultime</> et <Bold>4 autres tenues</>\n  • <Bold>1300 V-bucks</>\n  • 7 emotes\n  • 6 revêtements\n  • 6 outils de collecte\n  • 1 compagnon\n  • 7 planeurs\n  • 7 accessoires de dos\n  • 5 traînées de condensation\n  • 17 aérosols\n  • 3 pistes musicales\n  • 1 jouet\n  • 27 écrans de chargement\n  • Et plus !\nEnvie d'aller plus vite ? Utilisez vos V-bucks pour acheter des niveaux à tout moment !",
                                    "zh-cn": "第X赛季：从现在开始至10月6日。\n\n立即获得以下<Bold>价值逾3500V币</>的物品。\n  • <ItemName>废土领主-X</>服装\n  • <ItemName>灵狸</>服装\n  • <Bold>50%额外</>赛季匹配经验\n  • <Bold>60%额外</>赛季好友匹配经验\n\n通过游玩提升英雄季卡战阶，解锁<Bold>至少75个奖励</>（通常需要75到150个小时的游玩时间）。\n  • <ItemName>终极骑士</>和<Bold>4个额外服装</>\n  • <Bold>1300V币</>\n  • 7个姿势\n  • 6个皮肤\n  • 6个采集工具\n  • 一个宠物\n  • 7个滑翔伞\n  • 7个背部装饰\n  • 5滑翔轨迹\n  • 17个涂鸦\n  • 3个音轨\n  • 一个玩具\n  • 27个载入界面\n  • 以及更多奖励！\n希望更快吗？你可以随时使用V币购买战阶！",
                                    "es": "Temporada X: desde ahora hasta el 6 de octubre.\n\nConsigue instantáneamente estos objetos <Bold>valorados en más de 3500 paVos</>.\n  • Traje de <ItemName>Señor X</>\n  • Traje de <ItemName>Catalizadora</>\n  • <Bold>Bonificación del 50 %</> de PE por partida de temporada\n  • <Bold>Bonificación del 60 %</> de PE de partida amistosa de temporada\n\\Juega para subir de nivel tu pase de batalla y desbloquea <Bold>más de 100 recompensas</> (suele llevar entre 75 y 150 horas de juego).\n  • <ItemName>Caballero Ultima</> y <Bold>4 trajes más</>\n  • <Bold>1300 paVos</>\n  • 7 gestos\n  • 6 envoltorios\n  • 6 herramientas de recolección\n  • 1 mascota\n  • 7 alas delta\n  • 7 accesorios mochileros\n  • 5 estelas\n  • 17 grafitis\n  • 3 temas musicales\n  • 1 juguete\n  • 27 pantallas de carga\n  • ¡Y muchísimo más!\n¿Lo quieres más rápido? ¡Puedes usar paVos para comprar niveles siempre que quieras!",
                                    "ar": "Season X Now through October 6.\n\nInstantly get these items <Bold>valued at over 3,500 V-Bucks</>.\n  • <ItemName>X-Lord</> Outfit\n  • <ItemName>Catalyst</> Outfit\n  • <Bold>50% Bonus</> Season Match XP\n  • <Bold>60% Bonus</> Season Friend Match XP\n\nPlay to level up your Battle Pass, unlocking <Bold>over 100 rewards</> (typically takes 75 to 150 hours of play).\n  • <ItemName>Ultima Knight</> and <Bold>4 more Outfits</>\n  • <Bold>1,300 V-Bucks</>\n  • 7 Emotes\n  • 6 Wraps\n  • 6 Harvesting Tools\n  • 1 Pet\n  • 7 Gliders\n  • 7 Back Blings\n  • 5 Contrails\n  • 17 Sprays\n  • 3 Music Tracks\n  • 1 Toy\n  • 27 Loading Screens\n  • and so much more!\nWant it all faster? You can use V-Bucks to buy tiers any time!",
                                    "ja": "シーズンX: 10月6日まで。\r\n\r\n<Bold>3,500 V-Bucks以上の価値</>があるアイテムを今すぐ手に入れましょう。\r\n  • コスチューム「<ItemName>Xロード</>」\r\n  • コスチューム「<ItemName>カタリスト</>」</>\r\n  • シーズンマッチXPの<Bold>50%ボーナス</>\r\n  • シーズンフレンドマッチXPの<Bold>60%ボーナス\r\n\r\nプレイしてバトルパスのレベルを上げると、<Bold>100以上の報酬</>をアンロックできます(通常、プレイにかかる時間は75～150時間程度)。\r\n  • 「<ItemName>アルティマナイト</>」及び<Bold>さらなるコスチュームx4</>\r\n  • <Bold>1,300 V-Bucks</>\r\n  • エモートx7\r\n  • ラップx6\r\n  • 収集ツールx6\r\n  • ペットx1\r\n  • グライダーx7\r\n  • バックアクセサリーx7\r\n  • コントレイルx5\r\n  • スプレーx17\r\n  • ミュージックトラックx3\r\n  • おもちゃx1\r\n  • ロード画面x27\r\n • 他にも盛りだくさん！\r\nもっと早く報酬を全部集めたいという方は、V-Bucksでいつでもティアを購入できます！",
                                    "pl": "Season X: od teraz do 6 października.\n\nZgarnij od razu poniższe przedmioty <Bold>o wartości ponad 3500 V-dolców</>.\n  • Strój <ItemName>X-Lord</>\n  • Strój <ItemName>Katalizator</>\n  • Sezonowa <Bold>premia 50% PD</> za grę\n  • Sezonowa <Bold>premia 60% PD</> za grę ze znajomym\n\nGraj, aby awansować karnet bojowy i zdobyć <Bold>ponad 100 nagród</> (ich zebranie zajmuje zwykle od 75 do 150 godz. gry).\n  • <ItemName>Rycerz Ultima</> i <Bold>4 inne stroje</>\n  • <Bold>1300 V-dolców</>\n  • 7 emotek\n  • 6 malowań\n  • 6 zbieraków\n  • 1 pupil\n  • 7 lotni\n  • 7 plecaków\n  • 5 smug\n  • 17 graffiti\n  • 3 tła muzyczne\n  • 1 zabawka\n  • 27 ekranów wczytywania\n  • I dużo więcej!\nChcesz rozwijać się szybciej? W każdej chwili możesz kupić stopnie za V-dolce!",
                                    "es-419": "Desde la temporada X hasta el 6 de octubre.\n\\Obtén al instante estos objetos <Bold>que cuestan más de 3500 monedas V</>.\n  • Atuendo <ItemName>Señor X</>\n  • Atuendo <ItemName>Catalizadora</>\n  • <Bold>50 % de bonificación</> de PE para partidas de la temporada\n  • <Bold>60 % de bonificación</> de PE para partidas con amigos en la temporada\n\nJuega para subir de nivel el pase de batalla y desbloquear <Bold>más de 100 recompensas</> (esto lleva entre 75 y 150 horas de juego).\n  • <ItemName>Caballero Ultima</> y <Bold>4 atuendos más</>\n  • <Bold>1300 monedas V</>\n  • 7 gestos\n  • 6 papeles\n  • 6 herramientas de recolección\n  • 1 mascota\n  • 7 planeadores\n  • 7 mochilas retro\n  • 5 estelas\n  • 17 aerosoles\n  • 3 pistas de música\n  • 1 juguete\n  • 27 pantallas de carga\n • ¡Y mucho más!\n¿Lo quieres todo más rápido? ¡Puedes usar las monedas V para comprar niveles cuando quieras!",
                                    "tr": "X. Sezon: Şu andan 6 Ekim'e kadar.\n\n<Bold>3.500 V-Papel'in üzerinde değeri olan</> bu içerikleri hemen kap.\n  • <ItemName>X Lordu</> Kıyafeti\n  • <ItemName>Düz Kontak</> Kıyafeti\n  • <Bold>%50 Bonus</> Sezonluk Maç TP'si\n  • Arkadaşların için <Bold>%60 Bonus</> Sezonluk Maç TP'si\n\nBattle Royale oynayarak Savaş Bileti'nin aşamasını yükselt ve <Bold>100'den fazla ödülü</> aç (genelde 75 ila 150 saat oynama gerektirir).\n  • <ItemName>Kızıl Şövalye</> ve <Bold>4 Kıyafet</> daha\n  • <Bold>1.300 V-Papel</>\n  • 7 İfade\n  • 6 Kaplama\n  • 6 Toplama Aleti\n  • 1 Sadık Dost\n  • 7 Planör\n  • 7 Sırt Süsü\n  • 5 Dalış İzi\n  • 17 Sprey\n  • 3 Müzik Parçası\n  • 1 Oyuncak\n  • 27 Yükleme Ekranı\n  • ve çok daha fazlası!\nHepsini daha hızlı mı almak istiyorsun? V-Papel karşılığında istediğin zaman aşama açabilirsin!"
                                },
                                "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_BR_Season10_BattlePass.DA_BR_Season10_BattlePass",
                                "itemGrants": []
                            },
                            {
                                "offerId": "259920BC42F0AAC7C8672D856C9B622C",
                                "devName": "BR.Season10.BattleBundle.01",
                                "offerType": "StaticPrice",
                                "prices": [
                                    {
                                        "currencyType": "MtxCurrency",
                                        "currencySubType": "",
                                        "regularPrice": 4700,
                                        "dynamicRegularPrice": -1,
                                        "finalPrice": 2800,
                                        "saleType": "PercentOff",
                                        "saleExpiration": "9999-12-31T23:59:59.999Z",
                                        "basePrice": 2800
                                    }
                                ],
                                "categories": [],
                                "dailyLimit": -1,
                                "weeklyLimit": -1,
                                "monthlyLimit": -1,
                                "refundable": false,
                                "appStoreId": [
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    ""
                                ],
                                "requirements": [
                                    {
                                        "requirementType": "DenyOnFulfillment",
                                        "requiredId": "2E43CCD24C3BE8F5ABBDF28E233B9350",
                                        "minQuantity": 1
                                    }
                                ],
                                "metaInfo": [
                                    {
                                        "key": "Preroll",
                                        "value": "False"
                                    }
                                ],
                                "catalogGroup": "",
                                "catalogGroupPriority": 0,
                                "sortPriority": 0,
                                "title": {
                                    "de": "Battle Pass-Paket",
                                    "ru": "Боевой комплект",
                                    "ko": "배틀번들",
                                    "zh-hant": "戰鬥套組",
                                    "pt-br": "Pacotão de Batalha",
                                    "en": "Battle Bundle",
                                    "it": "Bundle battaglia",
                                    "fr": "Pack de combat",
                                    "zh-cn": "战斗套组",
                                    "es": "Lote de batalla",
                                    "ar": "Battle Bundle",
                                    "ja": "バトルバンドル",
                                    "pl": "Zestaw bojowy",
                                    "es-419": "Paquete de batalla",
                                    "tr": "Savaş Paketi"
                                },
                                "shortDescription": {
                                    "de": "Battle Pass + 25 Stufen!",
                                    "ru": "Боевой пропуск + 25 уровней!",
                                    "ko": "배틀패스 + 25티어!",
                                    "zh-hant": "英雄季卡增加25戰階！",
                                    "pt-br": "Passe de Batalha + 25 categorias!",
                                    "en": "Battle Pass + 25 tiers!",
                                    "it": "Pass battaglia + 25 livelli!",
                                    "fr": "Passe de combat + 25 paliers !",
                                    "zh-cn": "英雄季卡增加25战阶！",
                                    "es": "¡Pase de batalla y 25 niveles!",
                                    "ar": "Battle Pass + 25 tiers!",
                                    "ja": "バトルパス+25ティア！",
                                    "pl": "Karnet bojowy + 25 stopni!",
                                    "es-419": "¡Pase de batalla + 25 niveles!",
                                    "tr": "Savaş Bileti + 25 aşama!"
                                },
                                "description": {
                                    "de": "Saison X – Ab sofort bis einschließlich 6. Oktober.\n\nErhalte sofort diese Gegenstände <Bold>im Wert von über 10.000 V-Bucks</>.\n  • <ItemName>X-Meister</> (Outfit)\n  • <ItemName>Catalyst</> (Outfit)\n  • <ItemName>Tilted-Teknique</> (Outfit)\n  • <ItemName>Rostkiste</> (Hängegleiter)\n  • <ItemName>Emote-Tarnung</> (Lackierung)\n  • <ItemName>Rissblitze</> (Kondensstreifen)\n  • 300 V-Bucks\n  • <ItemName>The Final Showdown</> (Musikstück)\n  • <Bold>+70 %</> Saison-Match-EP\n  • <Bold>+80 %</> Saison-Match-EP für Freunde\n  • und noch mehr!\n\nSpiele weiter und stufe deinen Battle Pass auf, um <Bold>über 75 Belohnungen</> freizuschalten (im Normalfall werden dafür 75 bis 150 Spielstunden benötigt).\n  • <Bold>4 weitere Outfits</>\n  • <Bold>1.000 V-Bucks</>\n  • 6 Emotes\n  • 4 Lackierungen\n  • 5 Erntewerkzeuge\n  • 1 Gefährte\n  • 6 Hängegleiter\n  • 7 Rücken-Accessoires\n  • 3 Kondensstreifen\n  • 13 Spraymotive\n  • 2 Musikstücke\n  • 1 Spielzeug\n  • 23 Ladebildschirme\n  • und noch eine ganze Menge mehr!\nDas dauert dir zu lange? Du kannst dir mit V-Bucks jederzeit Stufen kaufen!",
                                    "ru": "Десятый сезон: до 6 октября\n\nСразу же получите предметы <Bold>стоимостью более 10 000 В-баксов!</>\n  • Экипировка <ItemName>Повелителя шипов</>;\n  • экипировка <ItemName>Тануки</>;\n  • экипировка <ItemName>Мисс Будущее</>;\n  • дельтаплан <ItemName>«Драндулет»</>;\n  • обёртка <ItemName>«Танцы»</>;\n  • воздушный след <ItemName>«Сияние разлома»</>;\n  • 300 В-баксов;\n  • музыкальная композиция <ItemName>«Решающая битва»</>;\n  • <Bold>+70% к опыту</> за матчи сезона;\n  • <Bold>+80% к опыту</> друзей за матчи сезона;\n  • и многое другое.\n\nИграйте, повышайте уровень боевого пропуска — и вас ждут <Bold>более 75 наград</>. Обычно, чтобы открыть все награды, требуется 75–150 часов игры.\n  • <Bold>Ещё 4 костюма;</>\n  • <Bold>1000 В-баксов</>;\n  • 6 эмоций;\n  • 4 обёртки;\n  • 5 инструментов;\n  • 1 питомец;\n  • 6 дельтапланов;\n  • 7 украшений на спину;\n  • 3 воздушных следа;\n  • 13 граффити;\n  • 2 музыкальные композиции;\n  • 1 игрушка;\n  • 23 экрана загрузки\n     и это ещё не всё!\nНе хотите ждать? Уровни можно быстро получить за В-баксы!",
                                    "ko": "시즌 X: 10월 6일 종료\n\n<Bold>10,000 V-Bucks 이상의 가치</>가 있는 여러 아이템을 즉시 받아가세요.\n  • <ItemName>엑스로드</> 의상\n  • <ItemName>카탈리스트</> 의상\n  • <ItemName>틸티드 테크니크 아티스트</> 의상\n  • <ItemName>고철통</> 글라이더\n  • <ItemName>이모트 위장 패턴</> 외관\n  • <ItemName>균열 번갯불</> 스카이다이빙 트레일\n  • 300 V-Bucks\n  • <ItemName>마지막 결전</> 음악 트랙\n  • <Bold>70% 보너스</> 시즌 매치 XP\n  • <Bold>80% 보너스</> 시즌 친구 매치 XP\n  • 그 외 더 많은 혜택!\n\n게임을 플레이하고 배틀패스 티어를 올려서 <Bold>75개 이상의 보상</>을 획득해보세요(보통 75-150시간 소요).\n  • <Bold>추가 의상 4개</>\n  • <Bold>1,000 V-Bucks</>\n  • 이모트 6개\n  • 외관 4개\n  • 수확 도구 5개\n  • 애완동물 1마리\n   • 글라이더 6개\n  • 등 장신구 7개\n  • 트레일 3개\n  • 스프레이 13개\n  • 음악 트랙 2개\n  • 장난감 1개\n  • 로딩 화면 23개\n  • 그 외 많은 혜택!\n더 빨리 보상을 얻고 싶으신가요? V-Bucks를 사용해서 언제든지 티어를 구매할 수 있습니다!",
                                    "zh-hant": "第十賽季：從現在開始至10月6日。\n\n立即獲得以下<Bold>價值逾10000V幣</>的物品。\n  • <ItemName>廢土領主-X</>服裝\n  • <ItemName>靈狸</>服裝\n  • <ItemName>斜塔塗鴉大師</>服裝\n  • <ItemName>垃圾鏟鬥</>滑翔傘\n  • <ItemName>姿勢迷彩 </>皮膚\n  • <ItemName>裂隙閃電</>滑翔軌跡\n  • 300V幣\n  • <ItemName>最終決戰 </>音軌\n  • <Bold>70%額外</>賽季匹配經驗\n  • <Bold>80%額外</>賽季好友匹配經驗\n  • 以及更多獎勵！\n\n通過遊玩提升英雄季卡戰階，解鎖<Bold>至少75個獎勵</>（通常需要75到150個小時的遊玩時間）。\n  • <Bold>4個額外服裝</>\n  • <Bold>1000V幣</>\n  • 6個姿勢\n  • 4個皮膚\n  • 5個採集工具\n  • 1個寵物\n  • 6個滑翔傘\n  • 7個背部裝飾\n  • 3個滑翔軌跡\n  • 13個塗鴉\n  • 2個音軌\n  • 1個玩具\n  • 23個載入介面\n  • 以及更多獎勵！\n希望更快嗎？你可以隨時使用V幣購買戰階！",
                                    "pt-br": "Temporada X: de hoje até 6 de outubro.\n\nReceba instantaneamente estes itens <Bold>avaliados em mais de 10.000 V-Bucks</>.\n  • Traje <ItemName>Lorde X</>\n  • Traje <ItemName>Transcendental</>\n  • Traje <ItemName>Téknica Torta</>\n  • Asa-delta <ItemName>Carcaça de Ferro-velho</>\n  • Envelopamento <ItemName>Camuflagem de Gesto</>\n  • Rastro de Fumaça <ItemName>Relâmpago de Fenda</>\n  • 300 V-Bucks\n  • Faixa Musical<ItemName>O Confronto Final</>\n  • <Bold>70% de Bônus</> de EXP da Temporada em Partidas\n  • <Bold>80% de Bônus</> de EXP da Temporada em Partidas com Amigos\n  • e mais!\n\nJogue para subir o nível do seu Passe de Batalha, desbloqueando <Bold>mais de 75 recompensas</> (leva em média de 75 a 150 horas de jogo).\n  • <Bold>Mais 4 Trajes</>\n  • <Bold>1.000 V-Bucks</>\n  • 6 Gestos\n  • 4 Envelopamentos\n  • 5 Ferramentas de Coleta\n  • 1 Mascote\n  • 6 Asas-deltas\n  • 7 Acessórios para as Costas\n  • 3 Rastros de Fumaça\n  • 13 Sprays\n  • 2 Faixas Musicais\n  • 1 Brinquedo\n  • 23 Telas de Carregamento\n  • e muito mais!\nQuer obter tudo mais rápido? Você pode comprar categorias com V-Bucks a qualquer hora!",
                                    "en": "Season X Now through October 6.\n\nInstantly get these items <Bold>valued at over 10,000 V-Bucks</>.\n  • <ItemName>X-Lord</> Outfit\n  • <ItemName>Catalyst</> Outfit\n  • <ItemName>Tilted Teknique</> Outfit\n  • <ItemName>Junk Bucket</> Glider\n  • <ItemName>Emote Camo </> Wrap\n  • <ItemName> Rift Lightning </> Contrails\n  • 300 V-Bucks\n  • <ItemName>The Final Showdown </> Music Track\n  • <Bold>70% Bonus</> Season Match XP\n  • <Bold>80% Bonus</> Season Friend Match XP\n  • and more!\n\nPlay to level up your Battle Pass, unlocking <Bold>over 75 rewards</> (typically takes 75 to 150 hours of play).\n  • <Bold>4 more Outfits</>\n  • <Bold>1,000 V-Bucks</>\n  • 6 Emotes\n  • 4 Wraps\n  • 5 Harvesting Tools\n  • 1 Pet\n  • 6 Gliders\n  • 7 Back Blings\n  • 3 Contrails\n  • 13 Sprays\n  • 2 Music Tracks\n  • 1 Toy\n  • 23 Loading Screens\n  • and so much more!\nWant it all faster? You can use V-Bucks to buy tiers any time!",
                                    "it": "Stagione X, da ora fino al 6 ottobre\n\nOttieni subito questi oggetti <Bold>dal valore di oltre 10.000 V-buck</>!\n • Costume <ItemName>Lord-X</>\n • Costume <ItemName>Catalizzatore</>\n • Costume <ItemName>PinnacoTeknica</>\n • Deltaplano <ItemName>Secchio di ciarpame</>\n  • Copertura <ItemName>Mimetica emote</>\n • Scia <ItemName>Fulmine della fenditura</>\n  • 300 V-buck\n  • Brano musicale <ItemName>Il Duello finale</>\n • <Bold>Bonus 70%</> PE partite stagionali\n • <Bold>Bonus 80%</> PE amici partite stagionali\n • E altro ancora!\n\nGioca per aumentare il livello del tuo Pass battaglia, sbloccando <Bold>più di 75 ricompense</> (per un totale indicativo di 75-150 ore di gioco).\n • <Bold>4 costumi in più</>\n • <Bold>1.000 V-Buck</>\n • 6 emote\n • 4 coperture\n • 5 strumenti raccolta\n • 1 piccolo amico\n • 6 deltaplani\n • 7 dorsi decorativi\n • 3 scie\n • 13 spray\n  • 2 brani musicali\n  • 1 giocattolo\n  • 23 schermate di caricamento\n  • E altro ancora!\nVuoi tutto e subito? Puoi acquistare livelli usando V-buck in qualsiasi momento!",
                                    "fr": "Saison X : jusqu'au 6 octobre.\n\nRecevez immédiatement ces objets <Bold>d'une valeur supérieure à 10 000 V-bucks</>.\n  • Tenue <ItemName>Maître occulte</>\n  • Tenue <ItemName>Déclic</>\n  • Tenue <ItemName>Graffeuse de Tilted</>\n  • Planeur <ItemName>Ferrailleur</>\n  • Revêtement <ItemName>Camouflage emote</>\n  • Traînée de condensation <ItemName>Faille fulgurante</>\n  • 300 V-bucks\n  • Musique <ItemName>Bataille finale </>\n  • Bonus d'EXP de saison de 70%\n  • Bonus d'EXP de saison de 80% pour des amis\n  • Et plus !\n\nJouez pour augmenter le niveau de votre Passe de combat et déverrouiller <Bold>plus de 75 récompenses</> (nécessitant de 75 à 150 heures de jeu).\n  • <Bold>4 autres tenues</>\n  • <Bold>1000 V-bucks</>\n  • 6 emotes\n  • 4 revêtements\n  • 5 outils de collecte\n  • 1 compagnon\n  • 6 planeurs\n  • 7 accessoires de dos\n  • 3 traînées de condensation\n  • 13 aérosols\n  • 2 musiques\n  • 1 jouet\n  • 23 écrans de chargement\n  • Et plus !\nEnvie d'aller plus vite ? Utilisez vos V-bucks pour acheter des niveaux à tout moment !",
                                    "zh-cn": "第X赛季：从现在开始至10月6日。\n\n立即获得以下<Bold>价值逾10000V币</>的物品。\n  • <ItemName>废土领主-X</>服装\n  • <ItemName>灵狸</>服装\n  • <ItemName>斜塔涂鸦大师</>服装\n  • <ItemName>垃圾铲斗</>滑翔伞\n  • <ItemName>尬舞迷彩 </>皮肤\n  • <ItemName>裂隙闪电</>滑翔轨迹\n  • 300V币\n  • <ItemName>最终决战 </>音轨\n  • <Bold>70%额外</>赛季匹配经验\n  • <Bold>80%额外</>赛季好友匹配经验\n  • 以及更多奖励！\n\n通过游玩提升英雄季卡战阶，解锁<Bold>至少75个奖励</>（通常需要75到150个小时的游玩时间）。\n  • <Bold>4个额外服装</>\n  • <Bold>1000V币</>\n  • 6个姿势\n  • 4个皮肤\n  • 5个采集工具\n  • 1个宠物\n  • 6个滑翔伞\n  • 7个背部装饰\n  • 3个滑翔轨迹\n  • 13个涂鸦\n  • 2个音轨\n  • 1个玩具\n  • 23个载入界面\n  • 以及更多奖励！\n希望更快吗？你可以随时使用V币购买战阶！",
                                    "es": "Temporada X: desde ahora hasta el 6 de octubre.\n\nConsigue instantáneamente estos objetos <Bold>valorados en más de 10 000 paVos</>.\n  • Traje de <ItemName>Señor X</>\n  • Traje de <ItemName>Catalizadora</>\n  • Traje de <ItemName>Neotéknica</>\n  • Ala delta <ItemName>Cubo de chatarra</>\n  • Envoltorio <ItemName>Gesto Cami</>\n  • Estela <ItemName>Relámpago de la grieta</>\n  • 300 paVos\n  • Tema musical <ItemName>El enfrentamiento final</>\n  • <Bold>Bonificación del 70 %</> de PE por partida de temporada\n  • <Bold>Bonificación del 80 %</> de PE de partida amistosa de temporada\n  • ¡Y mucho más!\n\nJuega para subir de nivel tu pase de batalla y desbloquea <Bold>más de 75 recompensas</> (suele llevar entre 75 y 150 horas de juego).\n  • <Bold>4 trajes más</>\n  • <Bold>1000 paVos</>\n  • 6 gestos\n  • 4 envoltorios\n  • 5 herramientas de recolección\n  • 1 mascota\n  • 6 alas delta\n  • 7 accesorios mochileros\\  • 3 estelas\n  • 13 grafitis\n  • 2 temas musicales\n  • 1 juguete\n  • 23 pantallas de carga\n  • ¡Y muchísimo más!\n¿Lo quieres más rápido? ¡Puedes usar paVos para comprar niveles siempre que quieras!",
                                    "ar": "Season X Now through October 6.\n\nInstantly get these items <Bold>valued at over 10,000 V-Bucks</>.\n  • <ItemName>X-Lord</> Outfit\n  • <ItemName>Catalyst</> Outfit\n  • <ItemName>Tilted Teknique</> Outfit\n  • <ItemName>Junk Bucket</> Glider\n  • <ItemName>Emote Camo </> Wrap\n  • <ItemName> Rift Lightning </> Contrails\n  • 300 V-Bucks\n  • <ItemName>The Final Showdown </> Music Track\n  • <Bold>70% Bonus</> Season Match XP\n  • <Bold>80% Bonus</> Season Friend Match XP\n  • and more!\n\nPlay to level up your Battle Pass, unlocking <Bold>over 75 rewards</> (typically takes 75 to 150 hours of play).\n  • <Bold>4 more Outfits</>\n  • <Bold>1,000 V-Bucks</>\n  • 6 Emotes\n  • 4 Wraps\n  • 5 Harvesting Tools\n  • 1 Pet\n  • 6 Gliders\n  • 7 Back Blings\n  • 3 Contrails\n  • 13 Sprays\n  • 2 Music Tracks\n  • 1 Toy\n  • 23 Loading Screens\n  • and so much more!\nWant it all faster? You can use V-Bucks to buy tiers any time!",
                                    "ja": "シーズンX: 10月6日まで。\n\n<Bold>10,000 V-Bucks以上の価値がある</>以下のアイテムをすぐに入手できます。\n  • コスチューム「<ItemName>Xロード</>」\n  • コスチューム「<ItemName>カタリスト</>」\n  • コスチューム「<ItemName>ティルテッドテクニーク</>」\n  • グライダー「 <ItemName>ジャンクバケット</>」\n  • ラップ「<ItemName>エモートカモ</>」\n  • コントレイル「<ItemName>リフトライトニング</>」\n  • 300 V-Bucks\n  •  ミュージックトラック「<ItemName>最終決戦</>」\n  • シーズンマッチXPの<Bold>70%ボーナス</>\n  • シーズンフレンドマッチXPの<Bold>80%ボーナス</>\n  • 他にも盛りだくさん！\n\nプレイしてバトルパスのレベルを上げると、<Bold>75個以上の報酬</>をアンロックできます(通常、プレイにかかる時間は75～150時間程度)。\n  • <Bold>さらなるコスチュームx4</>\n  • <Bold>1,000 V-Bucks</>\n  • エモートx6\n  • ラップx4\n  • 収集ツールx5\n  • ペットx1\n  • グライダーx6\n  • バックアクセサリーx7\n  • コントレイルx3\n  • スプレーx13\n  \n  • 2 ミュージックトラックx2\n  • おもちゃx1\n  • ロード画面x23  • 他にも盛りだくさん！\nもっと早く報酬を全部集めたいという方は、V-Bucksでいつでもティアを購入できます！",
                                    "pl": "Sezon X: od teraz do 6 października.\n\nZgarnij od razu poniższe przedmioty <Bold>o wartości ponad 10 000 V-dolców</>.\n  • Strój <ItemName>X-Lord</>\n  • Strój <ItemName>Katalizator</>\n  • Strój <ItemName>Wykrzywiona Teknique</>\n  • Lotnia <ItemName>Złomolot</>\n  • Malowanie <ItemName>Kamuflaż emotkowy</>\n  • Smuga <ItemName>Błyskawica szczeliny</>\n  • 300 V-dolców\n  • Tło muzyczne <ItemName>Ostatnie Starcie</>\n  • Sezonowa <Bold>premia 70% PD</> za grę\n  • Sezonowa <Bold>premia 80% PD</> za grę ze znajomym\n  • I nie tylko!\n\nGraj, aby awansować karnet bojowy i zdobyć <Bold>ponad 75 nagród</> (ich zebranie zajmuje zwykle od 75 do 150 godzin gry).\n  • <Bold>4 inne stroje</>\n  • <Bold>1000 V-dolców</>\n  • 6 emotek\n  • 4 malowania\n  • 5 zbieraków\n  • 1 pupil\n  • 6 lotni\n  • 7 plecaków\n  • 3 smugi\n  • 13 graffiti\n  • 2 tła muzyczne\n  • 1 zabawka\n  • 23 ekrany wczytywania\n  • I dużo więcej!\nChcesz rozwijać się szybciej? W każdej chwili możesz kupić stopnie za V-dolce!",
                                    "es-419": "Desde la temporada X hasta el 6 de octubre.\n\nObtén al instante estos objetos <Bold>que cuestan más de 10 000 monedas V</>.\n  • Atuendo <ItemName>Señor X</>\n  • Atuendo <ItemName>Catalizadora</>\n  • Atuendo <ItemName>Neotéknica</>\n  • Planeador <ItemName>Montón de chatarra</>\n  • Papel <ItemName>Camuflaje de gestos </>\n  • Estela <ItemName> Relámpago de la grieta </>\n  • 300 monedas V\n  • Pista de música <ItemName>El enfrentamiento final </>\n  • <Bold>70% de bonificación</> de PE para partidas de la temporada\n  • <Bold>80% de bonificación</> de PE para partidas con amigos en la temporada\n  • ¡Y mucho más!\n\nJuega para subir de nivel el pase de batalla y desbloquear <Bold>más de 75 recompensas</> (esto lleva entre 75 y 150 horas de juego).\n  • <Bold>4 atuendos más</>\n  • <Bold>1000 monedas V</>\n  • 6 gestos\n  • 4 papeles\n  • 5 herramientas de recolección\n  • 1 mascota\n  • 6 planeadores\n  • 7 mochilas retro\n  • 3 estelas\n  • 13 aerosoles\n  • 2 pistas de música\n  • 1 juguete\n  • 23 pantallas de carga\n  • ¡Y mucho más!\n¿Lo quieres todo más rápido? ¡Puedes usar las monedas V para comprar niveles cuando quieras!",
                                    "tr": "X. Sezon: Şu andan 6 Ekim'e kadar.\n\n<Bold>10.000 V-Papel'in üzerinde değeri olan</> bu içerikleri hemen kap.\n  • <ItemName>X Lordu</> Kıyafeti\n  • <ItemName>Düz Kontak</> Kıyafeti\n  • <ItemName>Serseri Grafitici</> Kıyafeti\n  • <ItemName>Eski Toprak</> Planörü\n  • <ItemName>İfadeli Kamuflaj</> Kaplaması\n  • <ItemName>Yırtık Yıldırımı</> Dalış İzi\n  • 300 V-Papel\n  • <ItemName>Nihai Hesaplaşma</> Müzik Parçası\n  • <Bold>%70 Bonus</> Sezonluk Maç TP'si\n  • Arkadaşların için <Bold>%80 Bonus</> Sezonluk Maç TP'si\n  • ve daha fazlası!\n\nBattle Royale oynayarak Savaş Bileti'nin aşamasını yükselt ve <Bold>75'ten fazla ödülü</> aç (genelde 75 ila 150 saat oynama gerektirir).\n  • <Bold>4 Kıyafet</> daha\n  • <Bold>1.000 V-Papel</>\n  • 6 İfade\n  • 4 Kaplama\n  • 5 Toplama Aleti\n  • 1 Sadık Dost\n  • 6 Planör\n  • 7 Sırt Süsü\n  • 3 Dalış İzi\n  • 13 Sprey\n  • 2 Müzik Parçası\n  • 1 Oyuncak\n  • 23 Yükleme Ekranı\n  • ve çok daha fazlası!\nHepsini daha hızlı mı almak istiyorsun? V-Papel karşılığında istediğin zaman aşama açabilirsin!"
                                },
                                "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_BR_Season10_BattlePassWithLevels.DA_BR_Season10_BattlePassWithLevels",
                                "itemGrants": []
                            },
                            {
                                "offerId": "AF1B7AC14A5F6A9ED255B88902120757",
                                "devName": "BR.Season10.SingleTier.01",
                                "offerType": "StaticPrice",
                                "prices": [
                                    {
                                        "currencyType": "MtxCurrency",
                                        "currencySubType": "",
                                        "regularPrice": 150,
                                        "dynamicRegularPrice": -1,
                                        "finalPrice": 150,
                                        "saleExpiration": "9999-12-31T23:59:59.999Z",
                                        "basePrice": 150
                                    }
                                ],
                                "categories": [],
                                "dailyLimit": -1,
                                "weeklyLimit": -1,
                                "monthlyLimit": -1,
                                "refundable": false,
                                "appStoreId": [
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    ""
                                ],
                                "requirements": [],
                                "metaInfo": [
                                    {
                                        "key": "Preroll",
                                        "value": "False"
                                    }
                                ],
                                "catalogGroup": "",
                                "catalogGroupPriority": 0,
                                "sortPriority": 0,
                                "title": {
                                    "de": "Battle Pass-Stufe",
                                    "ru": "Уровень боевого пропуска",
                                    "ko": "배틀패스 티어",
                                    "zh-hant": "英雄季卡戰階",
                                    "pt-br": "Categoria de Passe de Batalha",
                                    "en": "Battle Pass Tier",
                                    "it": "Livello Pass battaglia",
                                    "fr": "Palier du Passe de combat",
                                    "zh-cn": "英雄季卡战阶",
                                    "es": "Nivel del pase de batalla",
                                    "ar": "Battle Pass Tier",
                                    "ja": "バトルパスティア",
                                    "pl": "Stopień karnetu bojowego",
                                    "es-419": "Nivel de pase de batalla",
                                    "tr": "Savaş Bileti Aşaması"
                                },
                                "shortDescription": "",
                                "description": {
                                    "de": "Hol dir jetzt tolle Belohnungen!",
                                    "ru": "Получите отличные награды!",
                                    "ko": "지금 푸짐한 보상을 받아보세요!",
                                    "zh-hant": "現在獲得豐厚獎勵！",
                                    "pt-br": "Ganhe recompensas ótimas agora!",
                                    "en": "Get great rewards now!",
                                    "it": "Ricevi subito magnifiche ricompense!",
                                    "fr": "Obtenez de grandes récompenses !",
                                    "zh-cn": "现在获得丰厚奖励！",
                                    "es": "¡Consigue recompensas increíbles!",
                                    "ar": "Get great rewards now!",
                                    "ja": "ステキな報酬を今すぐゲット！",
                                    "pl": "Zgarnij świetne nagrody już teraz!",
                                    "es-419": "¡Consigue grandes recompensas ahora!",
                                    "tr": "Harika ödülleri kap!"
                                },
                                "displayAssetPath": "",
                                "itemGrants": []
                            },
                        ]
                    }
                ]
            }
            // need to contain both in items ig cusom bby
          //  let Item1 = ItemShopItem["BigItem1"]["items"]
            ItemShopItem["ShopItems"]["Weekly"].forEach((e) => {
                console.log(e)
                let requirements = [{
                    "requirementType": "DenyOnItemOwnership",
                    "requiredId": e.item,
                    "minQuantity": 1
                }]
                let itemGrants = [ {
                    "templateId": e.item,
                    "quantity": 1
                }]
                e.items.forEach((b) => {
                requirements.push(
                    {
                        "requirementType": "DenyOnItemOwnership",
                        "requiredId": b.item,
                        "minQuantity": 1
                    }
                )
                itemGrants.push(
                    {
                        "templateId": b.item,
                        "quantity": 1
                    }
                )
                })
                TEST.storefronts[1].catalogEntries.push({
                    "devName": e.item,
                    "offerId": `v2:/${e.id}`,
                    "fulfillmentIds": [],
                    "dailyLimit": -1,
                    "weeklyLimit": -1,
                    "monthlyLimit": -1,
                    "categories": [],
                    "prices": [
                        {
                            "currencyType": "MtxCurrency",
                            "currencySubType": "",
                            "regularPrice": e.price,
                            "finalPrice":  e.price,
                            "saleExpiration": new Date(8000, 99,99).toISOString(),
                            "basePrice":  e.price
                        }
                    ],
                    "matchFilter": "",
                    "filterWeight": 0,
                    "appStoreId": [],
                    "requirements": requirements,
                    "offerType": "StaticPrice",
                    "giftInfo": {
                        "bIsEnabled": true,
                        "forcedGiftBoxTemplateId": "",
                        "purchaseRequirements": [],
                        "giftRecordIds": []
                    },
                    "refundable": true,
                    "metaInfo": [],
                    "displayAssetPath": "",
                    "itemGrants": itemGrants,
                    "sortPriority": 0,
                    "catalogGroupPriority": 0
                })
            })

            ItemShopItem["ShopItems"]["Daily"].forEach((e) => {
                console.log(e)
                let requirements = [{
                    "requirementType": "DenyOnItemOwnership",
                    "requiredId": e.item,
                    "minQuantity": 1
                }]
                let itemGrants = [ {
                    "templateId": e.item,
                    "quantity": 1
                }]
                e.items.forEach((b) => {
                requirements.push(
                    {
                        "requirementType": "DenyOnItemOwnership",
                        "requiredId": b.item,
                        "minQuantity": 1
                    }
                )
                itemGrants.push(
                    {
                        "templateId": b.item,
                        "quantity": 1
                    }
                )
                })
                TEST.storefronts[0].catalogEntries.push({
                    "devName": e.item,
                    "offerId": `v2:/${e.id}`,
                    "fulfillmentIds": [],
                    "dailyLimit": -1,
                    "weeklyLimit": -1,
                    "monthlyLimit": -1,
                    "categories": [],
                    "prices": [
                        {
                            "currencyType": "MtxCurrency",
                            "currencySubType": "",
                            "regularPrice": e.price,
                            "finalPrice":  e.price,
                            "saleExpiration": new Date(8000, 99,99).toISOString(),
                            "basePrice":  e.price
                        }
                    ],
                    "matchFilter": "",
                    "filterWeight": 0,
                    "appStoreId": [],
                    "requirements": requirements,
                    "offerType": "StaticPrice",
                    "giftInfo": {
                        "bIsEnabled": true,
                        "forcedGiftBoxTemplateId": "",
                        "purchaseRequirements": [],
                        "giftRecordIds": []
                    },
                    "refundable": true,
                    "metaInfo": [],
                    "displayAssetPath": "",
                    "itemGrants": itemGrants,
                    "sortPriority": 0,
                    "catalogGroupPriority": 0
                })
            })
          
            
/*
            let Item2 = ItemShopItem["BigItem2"]["items"]
            Item2.forEach((e) => {
                TEST.storefronts[1].catalogEntries[1].requirements.push(e)
                TEST.storefronts[1].catalogEntries[1].itemGrants.push(e)
            })

            let Item3 = ItemShopItem["SmallItem1"]["items"]
            Item3.forEach((e) => {
                TEST.storefronts[0].catalogEntries[0].requirements.push(e)
                TEST.storefronts[0].catalogEntries[0].itemGrants.push(e)
            })

            let Item4 = ItemShopItem["SmallItem2"]["items"]
            Item4.forEach((e) => {
                TEST.storefronts[0].catalogEntries[1].requirements.push(e)
                TEST.storefronts[0].catalogEntries[1].itemGrants.push(e)
            })

            let Item5 = ItemShopItem["SmallItem3"]["items"]
            Item5.forEach((e) => {
                TEST.storefronts[0].catalogEntries[2].requirements.push(e)
                TEST.storefronts[0].catalogEntries[2].itemGrants.push(e)
            })

            let Item6 = ItemShopItem["SmallItem4"]["items"]
            Item6.forEach((e) => {
                TEST.storefronts[0].catalogEntries[3].requirements.push(e)
                TEST.storefronts[0].catalogEntries[3].itemGrants.push(e)
            })

            let Item7 = ItemShopItem["SmallItem5"]["items"]
            Item7.forEach((e) => {
                TEST.storefronts[0].catalogEntries[4].requirements.push(e)
                TEST.storefronts[0].catalogEntries[4].itemGrants.push(e)
            })

            let Item8 = ItemShopItem["SmallItem6"]["items"]
            Item8.forEach((e) => {
                TEST.storefronts[0].catalogEntries[5].requirements.push(e)
                TEST.storefronts[0].catalogEntries[5].itemGrants.push(e)
            })*/

            res.json(TEST)
        })
    }
}