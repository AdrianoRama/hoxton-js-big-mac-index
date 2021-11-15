let usBigMacPrice = 5.66;

let switzerlandBigMacPrice = 6.50;
let switzwerlandPPPBigMac = switzerlandBigMacPrice / usBigMacPrice;
let actualExchangeRateCHFUSD = 0.92;
let indexSwitzerlandBigMac = ((switzwerlandPPPBigMac - actualExchangeRateCHFUSD) / actualExchangeRateCHFUSD) *100;
console.log(indexSwitzerlandBigMac.toFixed(2));


let swedenBigMacPrice = 75;
let swedenPPPBigMac = swedenBigMacPrice / usBigMacPrice;
let actualExchangeRateSEKUSD = 8.79;
let indexSwedenBigMac = ((swedenPPPBigMac - actualExchangeRateSEKUSD) / actualExchangeRateSEKUSD) *100;
console.log(indexSwedenBigMac.toFixed(2));

let ausBigMacPrice = 12.45;
let ausPPPBigMac = ausBigMacPrice / usBigMacPrice;
let actualExchangeRateAUDUSD = 1.36;
let indexAusBigMac = ((ausPPPBigMac - actualExchangeRateAUDUSD) / actualExchangeRateAUDUSD) *100;
console.log(indexAusBigMac.toFixed(2));

let spainBigMacPrice = 7.15;
let spainPPPBigMac = spainBigMacPrice / usBigMacPrice;
let actualExchangeRateEUROUSD = 0.88;
let indexSpainBigMac = ((spainPPPBigMac - actualExchangeRateEUROUSD) / actualExchangeRateEUROUSD) *100;
console.log(indexSpainBigMac.toFixed(2));

let newZealandBigMacPrice = 14;
let newZealandPPPBigMac = newZealandBigMacPrice / usBigMacPrice;
let actualExchangeRateNZDUSD = 1.42;
let indexNewZealandBigMac = ((newZealandPPPBigMac - actualExchangeRateNZDUSD) / actualExchangeRateNZDUSD) *100;
console.log(indexNewZealandBigMac.toFixed(2));

