'use strict'
const fs = require('fs')
let rawData = fs.readFileSync('./data.json')
let jsonData = JSON.parse(rawData)

// let flavors = { Cinammon_Bun: false,
//   Strawberry_Cream: false,
//   Natural_Vanilla: true,
//   Dutch_Chocolate: true,
//   Salted_Caramel: false,
//   __typename: 'Flavors' }

// var flavorKeys = (Object.keys(flavors))
// var approvedFlavors = flavorKeys.filter((flavor)=> {
//   return (flavors[flavor] == true)
// })
// console.log(approvedFlavors)

const processStr = (arr)=>{
  let str = ""
  arr.forEach((val)=> {
    str = str + "|" + val.replace(/ /g,"_")
    console.log(str)
  })
  return str.substr(1)
}
let flavorArr = [ 'Cinammon_Bun',
'Strawberry_Cream',
'Natural_Vanilla',
'Dutch_Chocolate',
'Salted_Caramel' ]
var flavOptions = processStr(flavorArr)
console.log(flavOptions)