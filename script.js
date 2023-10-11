// Get all the buttons and quantities
const likeButtons = document.querySelectorAll('.like-button');
const decrementButtons = document.querySelectorAll('.decrement');
const incrementButtons = document.querySelectorAll('.increment');
const deleteButtons = document.querySelectorAll('.delete-button');
const quantityElements = document.querySelectorAll('.quantity');
const cartTotal = document.querySelector('.cart-total');

// Add event listeners for likes
likeButtons.forEach((button) => {
    button.addEventListener('click', function () {
        this.classList.toggle('liked');
    });
});

// Add event listeners for decrements
decrementButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
        const currentQuantity = parseInt(quantityElements[index].textContent);
        if (currentQuantity > 1) {
            quantityElements[index].textContent = currentQuantity - 1;
            updateTotalPrice();
        }
    });
});

// Add event listeners for increments
incrementButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
        const currentQuantity = parseInt(quantityElements[index].textContent);
        quantityElements[index].textContent = currentQuantity + 1;
        updateTotalPrice();
    });
});

// Add event listeners for delete 
deleteButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
        const cartItem = this.closest('.cart-item');
        cartItem.remove();
        updateTotalPrice();
    });
});

// Function to update the total price
function updateTotalPrice() {
    let totalPrice = 0;
    const cartItems = document.querySelectorAll('.cart-item');
    
    cartItems.forEach((item, index) => {
        const quantity = parseInt(quantityElements[index].textContent);
        const price = parseFloat(item.querySelector('p').textContent.split('$')[1]);
        totalPrice += quantity * price;
    });

    cartTotal.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

// Initial total price update
updateTotalPrice();
