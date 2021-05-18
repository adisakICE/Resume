const db = require("../models");
const storeItem = db.storeItem;


const createStoreItem = function () {
  storeItem.create({
    name: "Google home",
    description: "Google Home",
    url: "https://cf.shopee.co.th/file/9f053a9b146ebf46476fede8138f1480",
    price: 1990,
    currency: "Bath",
    supportLanguage: "TH/EN",
    brand:'Google',
    vacuum:'Only brand',
    camera:'Only brand',
    voice:'TH/EN'
  })
  storeItem.create({
    name: "Echo Dot 4",
    description: "Amazon dot",
    url: "https://cf.shopee.co.th/file/63bf134b2543f0a4d1a12e01d4429edd",
    price: 3999,
    currency: "Bath",
    supportLanguage: "EN",
    brand:'Amazon',
    vacuum:'Only brand',
    camera:'Only brand',
    voice:'EN'
  })
  storeItem.create({
    name: "Apple HomePod Mini ",
    description: "Apple home kit",
    url: "https://i.expansys.net/img/b/328790/apple-homepod-mini-wireless-smart-speaker.jpg",
    price: 6900,
    currency: "Bath",
    supportLanguage: "TH/EN",
    brand:'Apple',
    vacuum:'Only brand',
    camera:'Only brand',
    voice:'TH/EN'
  })
  storeItem.create({
    name: "Fibaro Home Center 3 Lite",
    description: "Fibaro",
    url: "https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=Fibr21001",
    price: 10000,
    currency: "Bath",
    supportLanguage: "EN",
    brand:'Fibaro',
    vacuum:'Support All',
    camera:'Support All',
    voice:'No support'
  })
}

module.exports = { createStoreItem }