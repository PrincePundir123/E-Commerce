import { loadProductsFetch } from "../data/products.js";
import { renderOrder } from "./checkout/ordersummary.js";
import { renderPaymentSummary } from "./checkout/paymentsummary.js";
import { loadCart } from "../data/cart.js";
// import "../data/backend-practice.js";
// import '../data/cart-oop.js';
// import '../data/cart-class.js';

// use Promiseall([])

Promise.all([
   loadProductsFetch(),
    new Promise((resolve) => {
        console.log("4");
        loadCart(() => {
            resolve("bhai");
            console.log("5");
        });
    })
]).then((value) => {
    console.log(value);
    renderOrder();
    renderPaymentSummary();
})



// Promise.all([
//     new Promise((resolve) => {
//         console.log("1");
//         loadProducts(() => {
//             console.log("3");
//             resolve("hello");
//         });
//         console.log("2");
//     }),
//     new Promise((resolve) => {
//         console.log("4");
//         loadCart(() => {
//             resolve("bhai");
//             console.log("5");
//         });
//     })
// ]).then((value) => {
//     console.log(value);
//     renderOrder();
//     renderPaymentSummary();
// })


// new Promise((resolve) =>{
//     console.log("1");
//     loadProducts(() =>{
//         console.log("3");
//         resolve();
//     });
//     console.log("2");
// }).then(()=>{
//     return new Promise((resolve) =>{
//     console.log("4");
//         loadCart(()=>{
//             resolve();
//     console.log("5");

//         });
//     });
// }).then(()=>{
//     renderOrder();
//     renderPaymentSummary();
// })



// loadProducts(()=>{
//     loadCart(() =>{
//         renderOrder();
//         renderPaymentSummary();
//     });
// });


// loadProductsFetch();