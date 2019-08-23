// define all constants amount for bills

const twentyDollar = 2000;
const tenDollar = 1000;
const fiveDollar = 500;
const twoDollar = 200;
const oneDollar = 100;
const quarter = 25;
const dime = 10; 
const nickel = 5;
const penny = 1;

const billAmount = {
    twentyDollar: 2000,
    tenDollar: 1000,
    fiveDollar: 500,
    twoDollar: 200,
    oneDollar: 100,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1
}

// Main function

const calculateChange = function(total, cash) {
    const output = {};
    const diff = total - cash;
    //223
    console.log(diff % quarter)
    // switch(diff) {
    //     case x:
    //       // code block
    //       break;
    //     case y:
    //       // code block
    //       break;
    //     default:
    //       // code block
    //   }

};
  
calculateChange(1787, 2000);
// console.log(calculateChange(2623, 4000));
// console.log(calculateChange(501, 1000));

// { twoDollar: 1, dime: 1, penny: 3 }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }