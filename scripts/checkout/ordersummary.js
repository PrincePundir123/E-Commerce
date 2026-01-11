import { getProduct,products } from '../../data/products.js';
import { toremovecart, updateDeliveryOption, cart } from '../cart.js';
import { formatMoney } from '../utils/money.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import { renderPaymentSummary } from './paymentsummary.js';
import { deliverycarts, getDelivery, getDeliveryOptioin } from '../deliverycart.js';
export function renderOrder() {
let checkouthtml = '';
cart.forEach((cartItem, index) => {
  const  productId = cartItem.productId;
  const matchingProduct= getProduct(productId);
  const deliveryoptionId = cartItem.deliveryId;
  const  deliveryoption = getDelivery(deliveryoptionId);
    const today = dayjs();
    const deliveryDate = today.add(deliveryoption.deliveryDays, 'days');
    const deliveryDateName = deliveryDate.format('dddd, MMMM D');
    if (!matchingProduct) return;
    checkouthtml += `
    <div class="cart-item-container js-delete-${matchingProduct.id}">
      <div class="delivery-date">
        Delivery date: ${deliveryDateName}
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
                ${deliveryHtml(matchingProduct, cartItem)}
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
        renderPaymentSummary();
      });
    });
  function deliveryHtml(matchingProduct, cartItem) {
    let jshtml = '';
    deliverycarts.forEach((deliveryItems) => {
      const today = dayjs();
      const deliveryDate = today.add(deliveryItems.deliveryDays, 'days');
      const deliveryDateName = deliveryDate.format('dddd ,MMMM D');
      const dlpriceCent = deliveryItems.deliveryPriceCents === 0
        ? 'FREE  '
        : `$${formatMoney(deliveryItems.deliveryPriceCents)} -`;
      const ischeck = deliveryItems.deliveryId === cartItem.deliveryId;
      jshtml += `
       
          <div class="delivery-option  js-delivery-option"
          data-product-id= "${matchingProduct.id}"
          data-delivery-id="${deliveryItems.deliveryId}"
          >
           <input type="radio"  
          ${ischeck ? 'checked' : ''}
          class="delivery-option-input"
          name="delivery-option-${matchingProduct.id}"
          data-delivery-id="${deliveryItems.deliveryId}">

            <div>
              <div class="delivery-option-date">
                ${deliveryDateName}
              </div>
              <div class="delivery-option-price">
                ${dlpriceCent}Shipping 
              </div>
            </div>
       </div>`
    });
    return jshtml;
  }
  document.querySelectorAll('.js-delivery-option')
    .forEach((element) => {
      element.addEventListener('click', () => {
        // const productId = element.dataset.productId;
        // const deliveryId = element.dataset.deliveryId;
        const { productId, deliveryId } = element.dataset;
        updateDeliveryOption(productId, deliveryId);
        renderOrder();
        renderPaymentSummary();
      });
    });
}
