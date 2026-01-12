import { addToCart ,cart,loadToStorage} from "../../../../scripts/cart.js";
describe('test suite: addToCart',() =>{
    it('adds a new product to the carts',() =>{
        spyOn(localStorage,'setItem');
        spyOn(localStorage,'getItem').and.callFake(()=>
        {
            return JSON.stringify([]);
        });
        loadToStorage();
        
        addToCart("15b6fc6f-327a-4ec4-896f-486349e85a3d");
         expect(cart.length).toEqual(3);
        // expect(localStorage.setItem).toHaveBeenCalledTimes(3);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[1].productId).toEqual('15b6fc6f-327a-4ec4-896f-486349e85a3d');
        expect(cart[1].deliveryId).toEqual('2');
    });
    it('adds an existing product to the carts',() =>{
        spyOn(localStorage,'setItem');
        spyOn(localStorage,'getItem').and.callFake(()=>
        {
            return JSON.stringify([{
                productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
                number : 1,
                deliveryId: '1'
            }]);
        });
        loadToStorage();
        addToCart("15b6fc6f-327a-4ec4-896f-486349e85a3d");
         expect(cart.length).toEqual(3);
        //  expect(localStorage.setItem).toHaveBeenCalledTimes(3);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[1].productId).toEqual('15b6fc6f-327a-4ec4-896f-486349e85a3d');
        expect(cart[1].deliveryId).toEqual('2');
    });
});
