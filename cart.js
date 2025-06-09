const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) { // was <= and changed to <.  The console caught a TypeError and told me the line in which the error occured.
      total += cartItems[i].price;
  }
  return total;
}

function applyDiscount(total, discountRate) {
  return total - total * discountRate;
}

function generateReceipt(cartItems, total) {
  let receipt = "Items:\n";
  cartItems.forEach(item => {
      receipt += `${item.name}: $${item.price}\n`;
  });
  receipt += `Total: $${total.toFixed(2)}`;
  return receipt;
}

// Debugging entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2);
const receipt = generateReceipt(cart, discountedTotal);

document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;

//I tested the code for an empty cart by commenting out lines 2-4 and no errors were found.
//I tested the code for a cart with a single item by commenting out lines 3-4 and no errors were found.
//I tested the code with a discount rate of 0 and no errors were found.
//I tested the code with a discount rate of 1 and no errors were found.