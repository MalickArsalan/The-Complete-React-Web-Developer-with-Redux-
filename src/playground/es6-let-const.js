var nameVar = 'Malick Arsalan';
var nameVar = 'Malick Qutub'; // Override Previous value
console.log('nameVar = ', nameVar);

let nameLet = 'Jan';
// let nameLet = 'Julie'; // Cannot redefine
nameLet = 'Julie';  // But can reassign
console.log('nameLet = ', nameLet);

const nameConst = 'Frank';
// const nameConst = 'Gunther'; // Cannot redefine
// nameConst = 'Gunther'; // Cannot reassign
console.log('nameConst = ', nameConst);


// var,let and const has functional scope which means we cannot acces it outside of function