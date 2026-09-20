// ===============================
// SEARCH PRODUCT
// ===============================

function searchProduct() {
  let keyword = document.getElementById("search-product").value.toLowerCase();

  let products = document.querySelectorAll(".product-card");

  products.forEach((product) => {
    let name = product.dataset.name.toLowerCase();

    if (name.includes(keyword)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

// ===============================
// SORT PRICE
// ===============================

function sortProduct() {
  let type = document.getElementById("sort-price").value;

  let box = document.querySelector(".product-grid");

  let products = Array.from(box.children);

  products.sort((a, b) => {
    let priceA = Number(a.dataset.price);

    let priceB = Number(b.dataset.price);

    if (type === "asc") {
      return priceA - priceB;
    }

    if (type === "desc") {
      return priceB - priceA;
    }

    return 0;
  });

  products.forEach((item) => {
    box.appendChild(item);
  });
}

// ===============================
// FAVORITE
// ===============================

function favorite(element) {
  element.classList.toggle("active");

  if (element.innerHTML.trim() === "♡") {
    element.innerHTML = "♥";
  } else {
    element.innerHTML = "♡";
  }
}

// ===============================
// OPEN PRODUCT DETAIL
// ===============================

function openProduct(name, price, image) {
  let product = {
    name: name,

    price: price,

    image: image,
  };

  localStorage.setItem(
    "currentProduct",

    JSON.stringify(product),
  );

  window.location.href = "product-detail.html";
}

// ===============================
// AUTO LOAD CART NUMBER
// ===============================

document.addEventListener(
  "DOMContentLoaded",

  () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let count = 0;

    cart.forEach((item) => {
      count += item.quantity;
    });

    let badge = document.getElementById("cart-count");

    if (badge) {
      badge.innerHTML = count;
    }
  },
);
function viewProduct(name, price, image) {
  let product = {
    name: name,

    price: Number(price),

    image: image,
  };

  localStorage.setItem("currentProduct", JSON.stringify(product));

  window.location.href = "product-detail.html";
}
function searchProduct() {
  let value = document.getElementById("search-product").value.toLowerCase();

  let products = document.querySelectorAll(".product-card");

  products.forEach((item) => {
    let name = item.dataset.name.toLowerCase();

    if (name.includes(value)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
