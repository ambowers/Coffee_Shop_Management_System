// Task 1 create an inventory array of product objects

const inventory = [
    { name: 'Espresso', price: 3, quantity: 10 }, 
    {name: 'Latte', price: 4, quantity: 5 },
    { name: 'Cappuccino', price: 4, quantity: 6 }, 
    { name: 'Mocha', price: 5, quantity: 0 } // made quantity zero to test out of stock mssg 
 ];

 // Task 2  create an orders array of order objects

let orders =[]
    //left the array empty to store the customer orders

// Task 3 create a function to place an order

function placeOrder(customerName, itemsOrdered){
    const itemsInStock = itemsOrdered.reduce((availibility, item) => {
        if (!availibility) return false;

        let product = inventory.find(order => order.name === item.product);

        if (!product){
            console.log(`Product ${item.product} cannot be found`);
            return false;
        }
        if (product.quantity < item.quantity){
            console.log(`Insufficient stock for ${item.product}`);
            return false;
        }
        return true;
    }, true);
if (!itemsInStock) return;
itemsOrdered.forEach(item => {
    let product = inventory.find(order => order.name === item.product);
    product.quantity -= item.quantity;
});

let customerOrder = {
    customer: customerName,
    items: itemsOrdered,
    status: 'Pending',
};
orders.push(customerOrder);
console.log('Order placed', customerOrder);
}
























