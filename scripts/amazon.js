import {addToCart, cart} from '../data/cart.js'
import { products} from '../data/products.js';
import {formatMoney} from '../scripts/utils/money.js';

// const products = [{
//     image : 'images/products/athletic-cotton-socks-6-pairs.jpg',
//     productname : 'Black and Gray Athletic Cotton Socks - 6 Pairs',
//     rating : {
//         stars : 4.5,
//         number: 87
//     },
//     priceCent : 1090
// },{
//     image : 'images/products/intermediate-composite-basketball.jpg',
//     productname : 'Intermediate Size Basketball',
//     rating : {
//         stars : 4,
//         number : 127
//     },
//     priceCent : 2095
// },{
//    image : 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg' ,
//    productname : 'Adults Plain Cotton T-Shirt - 2 Pack',
//    rating :{
//     stars : 4.5,
//     number : 56
//    },
//    priceCent :799
// }];
let producthtml = '';
products.forEach((product) => {
    producthtml = producthtml + ` <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
           ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="${product.getStarsUrl()}">
            <div class="product-rating-count link-primary">
              ${product.rating.number}
            </div>
          </div>

          <div class="product-price">
            $${formatMoney(product.priceCents)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          ${product.showsizeHTML()}
          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-cart" data-product-id ="${product.id}" >
            Add to Cart
          </button>
        </div>`;
});
document.querySelector('.js-grid-html').innerHTML = producthtml;

document.querySelectorAll('.js-add-cart')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            addToCart(productId);
            let cartquantity = 0;
            cart.forEach((element) => {
                cartquantity += element.number;
            });
            document.querySelector('.cart-quantity').innerHTML=cartquantity;
            console.log(cartquantity);
        });
    });

