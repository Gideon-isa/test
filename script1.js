const bill = parseInt(
  prompt("Please enter the bill amount incured at the restuarant in figure")
);
const tip = bill > 50 && bill < 300 ? 0.15 * bill : 0.2 * bill;
console.log(tip);

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value is ${
    bill + tip
  }`
);

// const bill2 = 200;
let tip2;

if (bill > 50 && bill < 300) {
  tip2 = 0.15 * bill;
} else if (!(bill > 50) || !(bill < 300)) {
  tip2 = 0.2 * bill;
} else {
  console.log(`please enter a valid number`);
}

console.log(tip2);
console.log(
  `The bill was ${bill}, the tip was ${tip2}, and the total value is ${
    bill + tip2
  }`
);

function calcArea(radius) {
  return 3.14 * radius ** 2;
}

const theArea = calcArea(10);
console.log(theArea);

function calcVol(length, height) {
  return theArea * height * length;
}

let theVol = calcVol(10,5);
console.log(theVol);

const calcArea = function (radius) {
  return 3.14 * radius ** 2;
};

const theArea = calcArea(10);
console.log(theArea);

// Arrow function
const greet = () => {
  return `hello, World`;
};

const result = greet();
console.log(result);

const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};
