function addToCart(productName, productPrice) {
    let cartList = document.getElementById("cart-list");

    // Create a new cart item
    let listItem = document.createElement("li");
    listItem.classList.add("cart-item");

    // Create product details span
    let productDetails = document.createElement("span");
    productDetails.innerText = `${productName} - ${productPrice}`;

    // Create remove button
    let removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    removeBtn.classList.add("remove-btn");
    removeBtn.onclick = function () {
        listItem.remove();
    };

    // Append product details and remove button
    listItem.appendChild(productDetails);
    listItem.appendChild(removeBtn);

    // Add the item to the cart list
    cartList.appendChild(listItem);
}