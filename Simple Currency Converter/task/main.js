const input = require('sync-input');

//Write your code here
// console.log('Welcome to Currency Converter!');
// console.log('1 USD equals 1 USD');
// console.log('1 USD equals 113.5 JPY');
// console.log('1 USD equals 0.89 EUR');
// console.log('1 USD equals 74.36 RUB');
// console.log('1 USD equals 0.75 GBP');

const rates = {
    'USD': {
        'USD': 1, 'JPY': 113.5, 'EUR': 0.89, 'RUB': 74.36, 'GBP': 0.75,
    }
};
const greet = () => console.log("Welcome to Currency Converter!");

function showExchangeRates() {
    for (const currency in rates['USD']) {
        console.log(`1 USD equals ${rates['USD'][currency]} ${currency}`);
    }
}

function converter() {
    console.log('I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP')
    console.log('Type the currency you wish to convert: USD');
    let currencyToConvert = 'USD';
    let convertToCurrency = input('To: ').toUpperCase();

    if (rates[currencyToConvert][convertToCurrency] === undefined) {
        console.log('Unknown currency')
    } else {
        let amount = Number(input("Amount: "));
        if (isNaN(amount)) {
            console.log('The amount has to be a number');
        } else if (amount < 1) {
            console.log('The amount cannot be less than 1');
        } else {
            let result = amount * rates[currencyToConvert][convertToCurrency];
            console.log(`Result: ${amount} ${currencyToConvert} equals ${result.toFixed(4)} ${convertToCurrency}`);
        }
    }

}

function main() {
    greet();
    showExchangeRates();
    converter();
}

main();

// console.log('I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP');
// // let yourCurrency = input("Type the currency you wish to convert: USD");
//
// console.log("Type the currency you wish to convert: USD");
// let toCurrency = input("To: ").toUpperCase();
// let amount = Number(input("Amount: "));
//
// printResult(toCurrency, amount)
//
// function convertToUSD(currency) {
//     // if (amount < 1) {
//     //     return "The amount cannot be less than 1";
//     // }
//     switch (currency) {
//         case "USD":
//         case "usd":
//             return 1;
//         case "JPY":
//         case "jpy":
//             return 113.5;
//         case "EUR":
//         case "eur":
//             return 0.89;
//         case "RUB":
//         case "rub":
//             return 74.36;
//         case "GBP":
//         case "gbp":
//             return 0.75;
//         default:
//             return "Unknown currency";
//     }
// }
//
// function printResult(currency2, amount) {
//     if (isNaN(amount)) {
//         console.log("The amount has to be a number");
//         return;
//     }
//     if (amount < 1) {
//         console.log("The amount cannot be less than 1");
//         return;
//     }
//     // let value1 = convertToUSD(currency1);
//     let value = convertToUSD(currency2);
//     if (value === "Unknown currency") {
//        console.log("Unknown currency");
//        return;
//     }
//
//     let result = value * amount;
//
//     console.log(`Result: ${amount} USD equals ${result.toFixed(4)} ${currency2}`)
// }