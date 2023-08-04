// Product class
function Product(name, price) {
  this.name = name;
  this.price = price;
}

// Cart class
function Cart() {
  this.products = [];
}

Cart.prototype.addProduct = function(product) {
  this.products.push(product);
};

Cart.prototype.removeProduct = function(product) {
  var index = this.products.indexOf(product);
  if (index !== -1) {
    this.products.splice(index, 1);
  }
};

Cart.prototype.getTotalPrice = function() {
  var totalPrice = 0;
  for (var i = 0; i < this.products.length; i++) {
    totalPrice += this.products[i].getPrice();
  }
  return totalPrice;
};

// DiscountedProduct subclass
function DiscountedProduct(name, price, discount) {
  Product.call(this, name, price);
  this.discount = discount;
}

DiscountedProduct.prototype = Object.create(Product.prototype);
DiscountedProduct.prototype.constructor = DiscountedProduct;

DiscountedProduct.prototype.getPrice = function() {
  var discountedPrice = this.price - (this.price * this.discount);
  return discountedPrice;
};

// Demo
var product1 = new Product('Product 1', 10);
var product2 = new Product('Product 2', 20);

var discountedProduct1 = new DiscountedProduct('Discounted Product 1', 30, 0.2);
var discountedProduct2 = new DiscountedProduct('Discounted Product 2', 40, 0.1);

var cart = new Cart();
cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(discountedProduct1);
cart.addProduct(discountedProduct2);

console.log('Products in the cart:');
console.log(cart.products);

console.log('Total price before discount:');
console.log(cart.getTotalPrice());

cart.removeProduct(product2);

console.log('Products in the cart after removing a product:');
console.log(cart.products);

console.log('Total price after discount:');
console.log(cart.getTotalPrice());