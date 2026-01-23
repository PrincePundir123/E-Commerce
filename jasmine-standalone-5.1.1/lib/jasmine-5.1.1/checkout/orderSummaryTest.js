import { loadToStorage,cart } from "../../../../scripts/cart.js";
import { renderOrder } from "../../../../scripts/checkout/ordersummary.js";
import { loadProducts ,loadProductsFetch} from "../../../../data/products.js";
describe('test suite: renderOrder summary',()=>{
    it('displays the cart', () =>{
        beforeALl((done) =>{
            loadProductsFetch().then(() =>{
                    done();
            });
        });
        document.querySelector('.js-test-container').innerHTML =`
       <div class ="js-html-insert"></div>
       <div class ="js-payment"></div>
       `;
       const  productId1 = "15b6fc6f-327a-4ec4-896f-486349e85a3d";
       spyOn(localStorage, 'setItem');
       spyOn(localStorage, 'getItem').and.callFake(() =>{
            return JSON.stringify([
            {
                productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
                number : 1,
                deliveryId: '1'
            },
            {
                productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                number: 1,
                deliveryId: '2'
            },
        ]);
       });
       loadToStorage();
       renderOrder();

       expect
       (document.querySelectorAll('.js-cart-item-test').length)
       .toEqual(3);
       expect(
        document.querySelector(`.js-delivery-options-${productId1}`).innerText
        ).toContain('Choose a delivery option:');
    }); 
    it('remove a product',() => {
          document.querySelector('.js-test-container').innerHTML =`
       <div class ="js-html-insert"></div>
        <div class ="js-payment"></div>
       `;
       const  productId1 = "15b6fc6f-327a-4ec4-896f-486349e85a3d";
       spyOn(localStorage, 'setItem');
       spyOn(localStorage, 'getItem').and.callFake(() =>{
            return JSON.stringify([
            {
                productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                number: 2,
                deliveryId: '1'
            },
            {
                productId: productId1,
                number: 1,
                deliveryId: '2'
            },
        ]);
       });
       loadToStorage();

       renderOrder() ;

      document.querySelector(`.js-delete-link-${productId1}`).click();
       expect
       (document.querySelectorAll('.js-cart-item-test').length)
       .toEqual(2);
       expect(
        cart.length
       ).toEqual(2);
    });
});

