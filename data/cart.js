export let cart;

loadToStorage();

export function loadToStorage() {
    cart = JSON.parse(localStorage.getItem('cart'));
    if (!cart) {
        cart = [
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
// save the data
export function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}
export function addToCart(productId) {

    let matching;
    cart.forEach((element) => {
        if (element.productId === productId) {
            matching = element;
        }
    });
    if (matching) {
        matching.number += 1;
    }
    else {
        cart.push({
            productId: productId,
            number: 1,
            deliveryId: '1'
        });
    }
    saveToStorage();
}
// function to remove cart
export function toremovecart(productId) {
    const newcart = [];
    cart.forEach((item) => {
        if (item.productId !== productId) {
            newcart.push(item);
        }
    });
    cart = newcart;
    saveToStorage();
}


//function to  update deliveryoption id
export function updateDeliveryOption(productId, deliveryId) {
    let matching;
    cart.forEach((element) => {
        if (element.productId === productId) {
            matching = element;
        }
    });
    if (matching) {
        matching.deliveryId = deliveryId;
    }
    saveToStorage();
}