/* define your functions here */
function calculateTotal(p, q) {
    return p * q;
}

function outputCartRow(item, total) {

    const { product: {title, filename, price}, quantity} = item;

    const row = ` 
        <tr>
            <td><img src="images/${filename}"></td>
            <td>${title}</td>
            <td>${quantity}</td>
            <td>${price}</td>
            <td>${total}</td>
        </tr>`;
    
    
    document.write(row);

}

function outputTableBody() {
    for (let item of cart) {
        let total = calculateTotal(item.quantity, item.product.price);
        outputCartRow(item, total);
    }
}

function subTotal() {

    let value = 0;

    for (let i = 0; i < cart.length; i++) {
        value += cart[i].product.price * cart[i].quantity;
    }

    const row = `<td>${value}</td>`;
    document.write(row);
    
}

function tax() {

    let subtotal = subTotal();
    taxes = subttoal * tax_rate;
    const row = `<td$${taxes}</td>`;
    document.write(row);
}

function shipping() {
    let shippingCost = 40.00;
    let subtotal = subTotal();
    if (subtotal > shipping_threshold) {
        shippingCost = 0.00;
    } 

    

    return shippingCost;
}

function grandTotal() {
    let shippingCost = 40.00
    let subtotal = subTotal();
    if (subtotal > shipping_threshold) {
        shippingCost = 0.00;
    } 
    let taxes = subtotal * tax_rate;

    let grandtotal = taxes + shippingCost + subtotal;

    return grandtotal;

}







        
