export const deliverycarts =[{
    deliveryId :'1',
    deliveryDays: 7,
    deliveryPriceCents: 0
},{
    deliveryId :'2',
    deliveryDays: 3,
    deliveryPriceCents: 499
},{
    deliveryId :'3',
    deliveryDays: 1,
    deliveryPriceCents: 999
}];
export function getDeliveryOptioin(){
    let deliveryoption = deliverycarts[0];
            deliverycarts.forEach((deliveryItems) => {
                if (deliveryItems.deliveryId === deliveryoptionId) {
                    deliveryoption = deliveryItems;
                }
            });
            return deliveryoption || deliveryoption[0];
}
export function getDelivery(deliveryoptionId){
    let deliveryoption;
    deliverycarts.forEach((deliveryItems) => {
    if (deliveryItems.deliveryId === deliveryoptionId) {
    deliveryoption = deliveryItems;
    }
});
return deliveryoption ||deliverycarts[0];
 }