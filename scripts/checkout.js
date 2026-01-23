import { loadProductsFetch } from "../data/products.js";
import { renderOrder } from "./checkout/ordersummary.js";
import { renderPaymentSummary } from "./checkout/paymentsummary.js";
import { loadCart } from "../data/cart.js";
// import "../data/backend-practice.js";
// import '../data/cart-oop.js';
// import '../data/cart-class.js';

// use Promiseall([])

/*
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
*/


async function loadPages(){
    await loadProductsFetch();
    const value = await new Promise((resolve) => {
       // bhai is stored in value 
        loadCart(() => {
            resolve("bhai");  
        });
    })
    renderOrder();
    renderPaymentSummary();
  }
   
loadPages();



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



/*
function loadPages(){
    new Promise ((resolve) =>{
        console.log("hello");
    resolve();
  }).then(() =>{
      console.log("Bhai");
      console.log("Bhai");
      console.log("Bhai");
  })
}
loadPages();
*/
/*
function loadPages(){
   return  new Promise ((resolve) =>{
        console.log("hello");
    resolve();
  })
}
loadPages().then(() =>{
      console.log("Bhai");
      console.log("Bhai");
      console.log("Bhai");
  });
  */

  /*
  async function loadPages(){
     console.log("hello");
  }
  loadPages().then(() =>{
      console.log("Bhai");
      console.log("Bhai");
      console.log("Bhai");
  });
  */