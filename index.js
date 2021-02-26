//   all conversations in currConvRate are to USD   

const currConvRate = [       
    {
        "name":"Euro",
        "stdconv":0.82
    },    {
        "name":"Yen",
        "stdconv":103
    },    {
        "name":"Rupee",
        "stdconv":73.18
    },    {
       "name":"Pound",
        "stdconv":0.73
    },    {
        "name":"USD",
        "stdconv":1
    }
]


console.log("Welcome! This is a cheap program to convert your currencies to other currencies")
console.log("What currency would you like to convert?")

//ASK USER INPUT // METHOD OF DOING SO NOT CURRENTLY PROGRAMMED
let currencyName = "Yen"

console.log("How much of the above currency do you have to convert?")
//ASK USER INPUT // METHOD OF DOING SO NOT CURRENTLY PROGRAMMED
let amountToExchange = 200


function convertToUSD (currencyName, amountToExchange) 
     console.log (  currencyName, amountToExhange )
     if (currencyName)
     console.log ( ` currConvRate.currency   `                             )
  return 
 

let intermediary = currencies.find(money => money.name === conversionCurrency)

let intermediaryAmount = intermediary.stdconv * conversionAmount

currencies.forEach(element => console.log(`${amountToExchang} of ${conversionCurrency} is equal to ${1/(element.stdconv/intermediaryAmount)} of ${element.name}`))