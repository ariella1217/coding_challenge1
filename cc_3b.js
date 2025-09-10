let inventory = [

{    sku:"sku-001",
    name:"football",
    price: 10.00,
    stock: 500
},

{   sku:"sku-002",
    name:"baseball",
    price: 3.00,
    stock: 400
}


{   sku:"sku-003",
    name:"basketball",
    price: 12.00,
    stock: 300
}

{   sku:"sku-004",
    name:"softball",
    price:4.00,
    stock:250
}];

inventory.forEach(obj =>console.log(
    `SKU: ${obj.sku}`,
    `Name: ${obj.name}`,
    `Price: ${obj.price}`,
    `Stock: ${obj.stock}`,
    ));

newObject = {sku:"sku-005",name:"golf ball",price:2.50,stock:35}
inventory.push(newObject)
console.log(inventory)

