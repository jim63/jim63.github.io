function avg(data) {
  let amount = data.size;
  let total = 0;
  for (let i = 0; i < amount; i++) {
    total += data.products[i].price;
  }
  return total / amount;
}

console.log(
  avg({
    size: 3,
    products: [{
      name: "Product 1",
      price: 100
    }, {
      name: "Product 2",
      price: 700
    }, {
      name: "Product 3",
      price: 250
    }]
  }));