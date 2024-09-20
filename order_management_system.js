// Task 1 create an inventory array of product objects

const inventory = [
    { name: 'Espresso', price: 3, quantity: 10 }, 
    {name: 'Vanilla Latte', price: 4, quantity: 5 },
    { name: 'Blueberry Muffin', price: 5, quantity: 6 }, 
    { name: 'Iced Mocha', price: 6, quantity: 8 }  
 ];

 // Task 2  create an orders array of order objects

let orders =[]
    //left the array empty to store the customer orders

// Task 3 create a function to place an order

function placeOrder(customerName, itemsOrdered){
    const itemsInStock = itemsOrdered.reduce((availibility, item) => {
        if (!availibility) return false;

        let product = inventory.find(product => product.name === item.product); //locating the name from the inventory

        if (!product){ // if the name is not in inventory
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
    let product = inventory.find(product => product.name === item.product);
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

// task 4 create a function to calculate total for an order

function completeOrder (order) {
    let total = 0; // so that we can add to the amount in the cart
    order.items.forEach(item => {
        let product = inventory.find(product => product.name === item.product);
        if (product) {
            total += product.price * item.quantity; // calculate total order by summing prices of all ordered items
        }    });
        return total;  
}
























