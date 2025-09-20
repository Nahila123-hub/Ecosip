// Get cart items from localStorage
const cartItemsContainer = document.getElementById('cartItems');
const cart = JSON.parse(localStorage.getItem('cart')) || [];

if(cart.length === 0){
  cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
} else {
  cartItemsContainer.innerHTML = '';
  cart.forEach((item, index) => {
    const div = document.createElement('div');
    div.classList.add('cart-item');
    
    // Features as a list
    let featuresHTML = "<ul>";
    item.features.forEach(f => {
      featuresHTML += `<li>${f}</li>`;
    });
    featuresHTML += "</ul>";

    // Reviews section
    let reviewsHTML = "";
    item.reviews.forEach(r => {
      reviewsHTML += `<p><strong>${r.user}</strong> (${r.rating}/5): ${r.comment}</p>`;
    });

    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}" style="width:200px;">
      <div class="cart-content">
        <h2>${item.name}</h2>
        <p><strong>Price:</strong> ₹${item.price}</p>
        <p><strong>Size:</strong> ${item.size}</p>
        <p><strong>Description:</strong> ${item.description}</p>
        <p><strong>Features:</strong> ${featuresHTML}</p>
        <p><strong>Customer Reviews:</strong></p>
        ${reviewsHTML}
        <button class="buyNowBtn" data-index="${index}">Buy Now</button>
      </div>
    `;
    
    cartItemsContainer.appendChild(div);
  });

  // Apply styling to all Buy Now buttons
  document.querySelectorAll('.buyNowBtn').forEach(btn => {
    btn.style.backgroundColor = "#FF6F61"; // Replace with your desired shade
    btn.style.color = "#fff";
    btn.style.padding = "12px 24px"; // Bigger button
    btn.style.fontSize = "1.1rem";
    btn.style.border = "none";
    btn.style.borderRadius = "8px";
    btn.style.cursor = "pointer";
    btn.style.marginTop = "8px";

    // Click event
    btn.addEventListener('click', () => {
      alert(`Proceeding to checkout for ${cart[btn.dataset.index].name}...`);
      // Later you can integrate a payment gateway here
    });
  });
}
