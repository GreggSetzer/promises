// Example 7: Promise chains

const orders = [
   {orderId: 22, customerId: 1, sku: 'MUG1', description: 'Coffee Mug', quantity: 1, price: 5},
   {orderId: 34, customerId: 2, sku: 'SHIRT1', description: 'JavaScript T-Shirt - Medium', quantity: 1, price: 22.50},
   {orderId: 56, customerId: 5, sku: 'SHIRT2', description: 'NodeJS T-Shirt - Large', quantity: 1, price: 23},
   {orderId: 56, customerId: 5, sku: 'BOOK3', description: 'Front End React Development', quantity: 1, price: 49},
   {orderId: 22, customerId: 1, sku: 'BOOK7', description: 'CSS: The Good Parts', quantity: 1, price: 39},
];

const shippingDetails = [
   {orderId: 22, customerId: 1, trackingNumber: '123456789'},
   {orderId: 34, customerId: 2, trackingNumber: '565642582'},
   {orderId: 56, customerId: 5, trackingNumber: '958426922'},
   {orderId: 22, customerId: 1, trackingNumber: '354678352'}
];

function getCustomer() {
   return new Promise(resolve => {
      resolve({
         customerId: 5,
         firstName: 'Brandon',
         lastName: 'Banks'
      });
   });
}

function getOrders(customer) {
   return new Promise(resolve => {

      // Get orders for our customer.
      customer.orders = orders.filter(order => {
         return order.customerId === customer.customerId;
      });

      resolve(customer);
   });
}

function getShippingDetails(customer) {
   return new Promise(resolve => {

      // Get shipping details for our customer.
      customer.shippingDetails = shippingDetails.filter(shippingData => {
         return shippingData.customerId === customer.customerId;
      });

      resolve(customer);
   });
}

function printOrder(customer) {
   console.log(`* `.repeat(10));
   console.log(`Customer Name: ${customer.firstName} ${customer.lastName}`);
   console.log('Items');
   console.log(`-`.repeat(20));

   let subtotal = 0;

   customer.orders.forEach(order => {
      const extendedPrice = order.price * order.quantity;
      subtotal += extendedPrice;
      console.log(`${order.quantity}   ${order.sku} - ${order.description} $${extendedPrice.toFixed(2)}`);
   });

   console.log(`Subtotal: $${subtotal.toFixed(2)}`);
   console.log(`Tax:      $0.00`);
   console.log(`Total:    $${subtotal.toFixed(2)}`);
}

getCustomer()
   .then(getOrders)
   .then(getShippingDetails)
   .then(printOrder)
   .catch(error => {
      console.log('Something went wrong');
      console.log(error);
   });

