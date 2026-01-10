import { formatMoney } from "../scripts/utils/money.js"; 
 
console.log("test suite");

console.log("test cse one");

if(formatMoney(2026) =='20.26'){
    console.log('good one bhai');
} else {
    console.log('not good one bhai');   
}

console.log("test cse second");

if(formatMoney(0) =='0.0'){
    console.log('good one bhai');
} else {
    console.log('not good one bhai');   
}

console.log("test cse third");

if(formatMoney(2026.4) =='20.26'){
    console.log('good one bhai');
} else {
    console.log('not good one bhai');   
}