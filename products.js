
const STORE_CATEGORIES = [
  { id: "clothes", name: "Clothes", icon: "👕" },
  { id: "phones", name: "Phones", icon: "📱" },
  { id: "groceries", name: "Groceries", icon: "🛒" },
  { id: "laptops", name: "Laptops", icon: "💻" },
  { id: "accessories", name: "Accessories", icon: "🎧" },
  { id: "watches", name: "Watches", icon: "⌚" },
  { id: "school", name: "School Supplies", icon: "🎒" },
  { id: "sports", name: "Sports Equipment", icon: "⚽" },
  { id: "work", name: "Work Equipment", icon: "🧰" }
];

const STORE_PRODUCTS = [
  {
    id: "royal-gold",
    name: "Royal Gold",
    category: "watches",
    price: 850000,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800",
    description: "Elegant gold-tone timepiece.",
    featured: true
  },
  {
    id: "black-royale",
    name: "Black Royale",
    category: "watches",
    price: 620000,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800",
    description: "A bold, refined everyday watch.",
    featured: true
  },
  {
    id: "classic-silver",
    name: "Classic Silver",
    category: "watches",
    price: 490000,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800",
    description: "Timeless silver-tone styling.",
    featured: false
  },
  {
    id: "executive",
    name: "Executive",
    category: "watches",
    price: 1200000,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
    description: "A sophisticated statement piece.",
    featured: true
  },
  {
    id: "everyday-shirt",
    name: "Classic Everyday Shirt",
    category: "clothes",
    price: null,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800",
    description: "A versatile wardrobe essential."
  },
  {
    id: "smartphone",
    name: "Smartphone",
    category: "phones",
    price: null,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
    description: "Ask us about available models."
  },
  {
    id: "grocery-basket",
    name: "Grocery Essentials",
    category: "groceries",
    price: null,
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800",
    description: "Everyday grocery essentials."
  },
  {
    id: "laptop",
    name: "Performance Laptop",
    category: "laptops",
    price: null,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800",
    description: "Ask about specifications and availability."
  },
  {
    id: "wireless-headphones",
    name: "Wireless Headphones",
    category: "accessories",
    price: null,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
    description: "Audio accessories for everyday use."
  },
  {
    id: "school-backpack",
    name: "School Backpack",
    category: "school",
    price: null,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
    description: "Practical school and study essentials."
  },
  {
    id: "football",
    name: "Football",
    category: "sports",
    price: null,
    image: "https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?w=800",
    description: "Sports equipment for training and play."
  },
  {
    id: "office-equipment",
    name: "Office Essentials",
    category: "work",
    price: null,
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
    description: "Equipment for your workspace."
  }
];

// Prices marked null must be confirmed before checkout.
// All products require supplier availability confirmation.
function formatStorePrice(price) {
  if (price == null) return "Price on request";
  return "₦" + price.toLocaleString("en-NG");
}

function searchStoreProducts(query = "", category = "all") {
  const term = query.trim().toLowerCase();

  return STORE_PRODUCTS.filter(product => {
    const matchesCategory =
      category === "all" || product.category === category;

    const matchesSearch =
      !term ||
      product.name.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term);

    return matchesCategory && matchesSearch;
  });
}

if (typeof window !== "undefined") {
  window.STORE_CATEGORIES = STORE_CATEGORIES;
  window.STORE_PRODUCTS = STORE_PRODUCTS;
  window.formatStorePrice = formatStorePrice;
  window.searchStoreProducts = searchStoreProducts;
}


(function connectGrandsonStore() {
  function initStore() {
    const productGrid = document.querySelector("main.container .products");
    if (!productGrid) return;

    // Keep the existing black-and-gold design.
    const style = document.createElement("style");
    style.textContent = `
      .store-tools{margin:0 0 24px}
      .store-search{width:100%;padding:14px;border-radius:10px;
        border:1px solid #444;background:#111;color:#fff;margin-bottom:16px}
      .store-categories{display:flex;gap:9px;overflow-x:auto;
        padding:4px 0 14px}
      .store-category{white-space:nowrap;padding:10px 14px;
        border:1px solid #444;border-radius:22px;background:#151515;
        color:#eee;cursor:pointer}
      .store-category.active{background:#d6b35a;color:#080808;
        border-color:#d6b35a;font-weight:bold}
      .store-product-image{width:100%;height:190px;object-fit:cover;
        border-radius:12px;background:#191919}
      .store-card{min-width:0}
      .store-description{color:#aaa;min-height:38px}
      .store-price-note{font-size:12px;color:#aaa;margin-top:6px}
      .store-empty{color:#aaa;text-align:center;padding:30px}
      @media(max-width:500px){
        .store-product-image{height:200px}
      }
    `;
    document.head.appendChild(style);

    let activeCategory = "all";
    let searchTerm = "";

    const tools = document.createElement("div");
    tools.className = "store-tools";
    tools.innerHTML = `
      <input class="store-search" type="search"
        placeholder="Search products..." aria-label="Search products">
      <div class="store-categories" aria-label="Product categories"></div>
    `;

    productGrid.parentNode.insertBefore(tools, productGrid);

    const search = tools.querySelector(".store-search");
    const categories = tools.querySelector(".store-categories");

    categories.innerHTML = `
      <button type="button" class="store-category active"
        data-category="all">All Products</button>
      ${STORE_CATEGORIES.map(category => `
        <button type="button" class="store-category"
          data-category="${category.id}">
          ${category.icon} ${category.name}
        </button>
      `).join("")}
    `;

    function renderProducts() {
      const products = searchStoreProducts(searchTerm, activeCategory);

      if (!products.length) {
        productGrid.innerHTML =
          '<p class="store-empty">No products found. Try another search.</p>';
        return;
      }

      productGrid.innerHTML = products.map(product => {
        const price = formatStorePrice(product.price);
        const canAdd = Number.isFinite(product.price) && product.price > 0;

        return `
          <article class="card store-card">
            <img class="store-product-image"
              src="${product.image}"
              alt="${product.name}"
              loading="lazy"
              onerror="this.style.display='none'">
            <h3>${product.name}</h3>
            <p class="store-description">${product.description}</p>
            <div class="price">${price}</div>
            ${canAdd ? "" : `
              <p class="store-price-note">
                Price and supplier availability must be confirmed.
              </p>
            `}
            <button type="button"
              onclick="${canAdd
                ? `addToCart('${product.name.replace(/'/g, "\\'")}',${product.price})`
                : `window.open('https://wa.me/2348108521685?text='+encodeURIComponent('Hello GRANDSON ROYALE, please confirm the price and availability of ${encodeURIComponent(product.name)}.'),'_blank')`
              }">
              ${canAdd ? "ADD TO CART" : "ASK FOR PRICE"}
            </button>
          </article>
        `;
      }).join("");
    }

    search.addEventListener("input", event => {
      searchTerm = event.target.value;
      renderProducts();
    });

    categories.addEventListener("click", event => {
      const button = event.target.closest("[data-category]");
      if (!button) return;

      activeCategory = button.dataset.category;

      categories.querySelectorAll(".store-category").forEach(item => {
        item.classList.toggle("active", item === button);
      });

      renderProducts();
    });

    renderProducts();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initStore);
  } else {
    initStore();
  }
})();
