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
    product.quantity -= item.quantity; // items are available, subtracting ordered quantity from products stock
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

// Task 5 Create a function to mark order as completed

function completeOrder(customerName) {
    let order = orders.find(order => order.customer === customerName);
    if (order){
        order.status = 'Completed'; // found order w matching customer name in orders array, status changed to completed
        console.log(`Order complete for customer ${customerName}`);
    } else { // if the order cannot b found, log an error mssg
        console.log(`Order for ${customerName} cannot be found`);
    }
}

// task 6 Create a function to check pending orders
function checkPendingOrders (){
    let isPending = false;
    orders.forEach(order => { // iterate over the orders array
        if (order.status === 'Pending'){
            isPending = true;
            console.log(`Order of ${order.customer} is still pending`);
            order.items.forEach(item => {
                console.log(`${item.product}, quantity: ${item.quantity}`);
            });
        }});
}



























