const {x,setValue,getValue} = require("./myModule");
console.log(x);
setValue();
console.log(getValue());
console.log(x); // this x will print the snapshot of the x instead of the actual x which was changed after calling setValue() function, that's why above function getValue() is used to get the updated value.
// ⚠️ x is exported as a value in myModule.js, so its initial value (1) is copied. But setValue and getValue are functions, and they maintain a live reference to the x inside the module.
