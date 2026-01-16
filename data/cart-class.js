class Cart {
    cartItem;
    localStorageKey ;

    constructor(localStorageKey) {
        this.localStorageKey = localStorageKey;

        this.loadToStorage();
    }

    loadToStorage() {
        this.cartItem = JSON.parse(localStorage.getItem(this.localStorageKey));
        if (!this.cartItem) {
            this.cartItem = [
                {
                    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                    number: 2,
                    deliveryId: '1'
                },
                {
                    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                    number: 1,
                    deliveryId: '2'
                },
                {
                    productId: "54e0eccd-8f36-462b-b68a-8182611d9add",
                    number: 1,
                    deliveryId: '3'
                }
            ];
        }
    }
    saveToStorage() {
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItem));
    }

    addToCart(productId) {

        let matching;
        this.cartItem.forEach((element) => {
            if (element.productId === productId) {
                matching = element;
            }
        });
        if (matching) {
            matching.number += 1;
        }
        else {
            this.cartItem.push({
                productId: productId,
                number: 1,
                deliveryId: '1'
            });
        }
        saveToStorage();
    }

    toremovecart(productId) {
        const newcart = [];
        this.cartItem.forEach((item) => {
            if (item.productId !== productId) {
                newcart.push(item);
            }
        });
        this.cartItem = newcart;
        saveToStorage();
    }

    updateDeliveryOption(productId, deliveryId) {
        let matching;
        this.cartItem.forEach((element) => {
            if (element.productId === productId) {
                matching = element;
            }
        });
        if (matching) {
            matching.deliveryId = deliveryId;
        }
        this.saveToStorage();
    }
};


const cart = new Cart('cart-oop');
const bussinesscart = new Cart('cart-bussiness');



console.log(cart);
console.log(bussinesscart);
console.log(bussinesscart instanceof Cart);


