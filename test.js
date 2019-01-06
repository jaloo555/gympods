'use strict'
const fs = require('fs')
let rawData = fs.readFileSync('./data.json')
let jsonData = JSON.parse(rawData)

let flavors = ["Cinammon_Bun", "Strawberry_Cream", "Natural_Vanilla", "Dutch_Chocolate", "Salted_Caramel"]
let str = ""
flavors.forEach(el => {
  str = str + "|" + el
});
let customField = {
  customFields: [{
    name: "Flavors",
    options: str.substr(1),
    type: "dropdown"
  }]
}

console.log(customField)