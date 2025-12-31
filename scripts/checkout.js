import { products } from '../data/products.js';
import { cart} from '../scripts/cart.js';
import { toremovecart } from '../scripts/cart.js';
import {formatMoney} from './utils/money.js';
let checkouthtml = '';
let matchingProduct;

cart.forEach((cartItem, index) => {

  // find matching product
  products.forEach((product) => {
    if (product.id === cartItem.productId) {
      matchingProduct = product;
    }
  });

  if (!matchingProduct) return;

  checkouthtml += `
    <div class="cart-item-container js-delete-${matchingProduct.id}">
      <div class="delivery-date">
        Delivery date: Tuesday, June 21
      </div>

      <div class="cart-item-details-grid">
        <img class="product-image"
          src="${matchingProduct.image}">

        <div class="cart-item-details">
          <div class="product-name">
            ${matchingProduct.name}
          </div>
          <div class="product-price">
            $${formatMoney(matchingProduct.priceCents)}
          </div>
          <div class="product-quantity">
            <span>
              Quantity:
              <span class="quantity-label">${cartItem.number}</span>
            </span>
            <span class="update-quantity-link link-primary">
              Update
            </span>
            <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
              Delete
            </span>
          </div>
        </div>

        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>

          <div class="delivery-option">
            <input type="radio" checked
              class="delivery-option-input"
              name="delivery-option-${index}">
            <div>
              <div class="delivery-option-date">
                Tuesday, June 21
              </div>
              <div class="delivery-option-price">
                FREE Shipping
              </div>
            </div>
          </div>

          <div class="delivery-option">
            <input type="radio"
              class="delivery-option-input"
              name="delivery-option-${index}">
            <div>
              <div class="delivery-option-date">
                Wednesday, June 15
              </div>
              <div class="delivery-option-price">
                $4.99 - Shipping
              </div>
            </div>
          </div>

          <div class="delivery-option">
            <input type="radio"
              class="delivery-option-input"
              name="delivery-option-${index}">
            <div>
              <div class="delivery-option-date">
                Monday, June 13
              </div>
              <div class="delivery-option-price">
                $9.99 - Shipping
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
});

document.querySelector('.js-html-insert').innerHTML = checkouthtml;
 document.querySelectorAll('.js-delete-link')
  .forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
       toremovecart(productId);
       const container = document.querySelector(`.js-delete-${productId}`);
      //  console.log(container);
      container.remove();
    });
  });

//  let totalitem =0 ; 
// cart.forEach((item) =>{
//     totalitem += item.number;
// });
// let totalamount =0;
// products.forEach((item) =>{
//     product.priceCents /100;
// });
// const ShippingAndHandling =4.00;
// let beforeAmount = totalamount+ ShippingAndHandling;
// let tax= beforeAmount * 0.1;
// let orderTotal = tax +beforeAmount;
//           const paymenthtml =`<div class="payment-summary">
//           <div class="payment-summary-title">
//             Order Summary
//           </div>

//           <div class="payment-summary-row">
//             <div>Items (${totalitem}):</div>
//             <div class="payment-summary-money">$${totalamount}</div>
//           </div>

//           <div class="payment-summary-row">
//             <div>Shipping &amp; handling:</div>
//             <div class="payment-summary-money">$${ShippingAndHandling}</div>
//           </div>

//           <div class="payment-summary-row subtotal-row">
//             <div>Total before tax:</div>
//             <div class="payment-summary-money">${beforeAmount}</div>
//           </div>

//           <div class="payment-summary-row">
//             <div>Estimated tax (10%):</div>
//             <div class="payment-summary-money">$${tax}</div>
//           </div>

//           <div class="payment-summary-row total-row">
//             <div>Order total:</div>
//             <div class="payment-summary-money">$${orderTotal}</div>
//           </div>

//           <button class="place-order-button button-primary">
//             Place your order
//           </button>
//         </div>`;
//         document.querySelector('.payment-summary').innerHTML = paymenthtml;
    