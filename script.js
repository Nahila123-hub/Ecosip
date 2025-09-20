// Smooth scroll for all pages
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    if(this.getAttribute('href').startsWith("#")){
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    }
  });
});

// Contact form submit alert
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', e=>{
    e.preventDefault();
    alert('Thank you for contacting EcoSip! We will get back to you soon.');
    contactForm.reset();
  });
}

// Products data for shop page
const products = [
  {
    name:"Minimal Bamboo Bottle",
    price:250,
    size:"500ml",
    img:"hero.png",
    description:"This Minimal Bamboo Bottle is crafted from sustainable bamboo, designed for eco-conscious individuals. Perfect for carrying water or other beverages, it keeps your drinks fresh and cool. Ideal for daily use or travel.",
    features:["Eco-Friendly", "Reusable", "Toxin-Free", "Stylish Minimal Design"],
    reviews:[
      {user:"Priya S.", rating:5, comment:"Love this bottle! Perfect size and design."},
      {user:"Arjun M.", rating:4, comment:"Very sturdy and eco-friendly."}
    ]
  },
  {
    name:"Patterned Bamboo Bottle",
    price:300,
    size:"750ml",
    img:"patterned.jpg",
    description:"This Patterned Bamboo Bottle combines eco-friendliness with modern design. Its 750ml capacity is perfect for long trips or office use. Each bottle features unique patterns for a stylish look.",
    features:["Eco-Friendly", "Large Capacity", "Reusable", "Unique Pattern Designs"],
    reviews:[
      {user:"Sneha R.", rating:5, comment:"The patterns are amazing! Great bottle."},
      {user:"Rohan K.", rating:4, comment:"Holds liquids well, looks stylish."}
    ]
  },
  {
    name:"Eco Chic Bamboo Bottle",
    price:280,
    size:"500ml",
    img:"chic.jpg",
    description:"The Eco Chic Bamboo Bottle is perfect for individuals who value style and sustainability. Compact, durable, and toxin-free, this bottle is great for daily hydration while reducing plastic waste.",
    features:["Eco-Friendly", "Reusable", "Toxin-Free", "Chic Design"],
    reviews:[
      {user:"Anita P.", rating:5, comment:"Stylish and practical. Love it!"},
      {user:"Vikram S.", rating:4, comment:"Good size, easy to carry."}
    ]
  },
  {
    name:"Stylish Bamboo Bottle",
    price:320,
    size:"750ml",
    img:"stylish.jpg",
    description:"This Stylish Bamboo Bottle is designed for maximum impact. Large capacity, modern design, and fully sustainable. Perfect for fitness enthusiasts, travelers, or anyone looking for a fashionable hydration solution.",
    features:["Eco-Friendly", "Large Capacity", "Reusable", "Modern Stylish Design"],
    reviews:[
      {user:"Kiran T.", rating:5, comment:"Best bottle I've ever bought!"},
      {user:"Meera J.", rating:4, comment:"Looks stylish and is very functional."}
    ]
  }
];

// Render shop products
const shopGrid = document.getElementById('shopGrid');
if(shopGrid){
  function displayProducts(list){
    shopGrid.innerHTML = '';
    list.forEach(p=>{
      const div = document.createElement('div');
      div.classList.add('product');
      div.innerHTML = `
        <img src="${p.img}" alt="${p.name}">
        <div class="product-content">
          <h4>${p.name}</h4>
          <p>₹${p.price}</p>
          <button>Add to Cart</button>
        </div>
      `;
      shopGrid.appendChild(div);
    });
  }
  displayProducts(products);

  // Filter functionality
  const filterBtn = document.getElementById('filterBtn');
  if(filterBtn){
    filterBtn.addEventListener('click',()=>{
      const size = document.getElementById('size').value;
      const price = parseFloat(document.getElementById('price').value) || Infinity;
      const filtered = products.filter(p=> (size==='all'||p.size===size) && p.price<=price);
      displayProducts(filtered);
    });
  }

  // Add to Cart functionality
  shopGrid.querySelectorAll('button').forEach((btn, index)=>{
    btn.addEventListener('click', ()=>{
      const product = products[index];
      localStorage.setItem('cart', JSON.stringify([product])); // store product
      window.location.href = "cart.html"; // redirect to cart page
    });
  });
}
