const name = item.dataset.name;
const img = item.dataset.img;
const price = item.dataset.price;

let cart = JSON.parse(localStorage.getItem("cart")) || [];
cart.push({ name, img, price });
localStorage.setItem("cart", JSON.stringify(cart));

function placeOrder() {
  if (cart.length === 0) {
    alert("Your cart is empty. Please add items before placing an order.");
    return;
  }

  const confirmOrder = confirm("Are you sure you want to place the order?");
  if (confirmOrder) {
    alert("Order placed successfully! Thank you for shopping with Abikaavya Xerox.");
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
}

