// ===============================
// PRODUCT DETAIL DATA
// ===============================

let quantity = 1;

let currentProduct = JSON.parse(localStorage.getItem("currentProduct")) || {
  name: "TH true MILK nguyên chất",

  price: 35000,

  image: "images/UHT-nguyen-chat-1L_275x186.png",
};

// ===============================
// LOAD PRODUCT
// ===============================

document.addEventListener(
  "DOMContentLoaded",

  () => {
    let name = document.getElementById("product-name");

    let price = document.getElementById("product-price");

    let image = document.getElementById("product-image");

    if (name) {
      name.innerHTML = currentProduct.name;
    }

    if (price) {
      price.innerHTML = currentProduct.price.toLocaleString() + "đ";
    }

    if (image) {
      image.src = currentProduct.image;
    }
  },
);

// ===============================
// CHANGE QUANTITY
// ===============================

function changeQty(value) {
  quantity += value;

  if (quantity < 1) {
    quantity = 1;
  }

  let box = document.getElementById("quantity");

  if (box) {
    box.innerHTML = quantity;
  }
}

// ===============================
// ===============================
// ADD DETAIL CART
// ===============================

function addDetailCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let product = cart.find((item) => item.name === currentProduct.name);

  if (product) {
    product.quantity += quantity;
  } else {
    cart.push({
      name: currentProduct.name,

      price: Number(currentProduct.price),

      image: currentProduct.image,

      quantity: quantity,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  // cập nhật số lượng giỏ

  let count = 0;

  cart.forEach((item) => {
    count += item.quantity;
  });

  let badge = document.getElementById("cart-count");

  if (badge) {
    badge.innerHTML = count;

    badge.classList.add("cart-bounce");

    setTimeout(() => {
      badge.classList.remove("cart-bounce");
    }, 500);
  }

  // hiệu ứng bay ảnh

  flyDetailToCart();

  // thông báo đẹp

  showToast("Đã thêm " + currentProduct.name + " vào giỏ hàng");
}
let desc = document.getElementById("product-desc");

if (desc) {
  desc.innerHTML =
    "" +
    currentProduct.name +
    " mang đến nguồn dinh dưỡng chất lượng, " +
    "được sản xuất từ nguồn sữa tươi sạch TH true MILK.";
}
// ===============================
// FLY IMAGE DETAIL TO CART
// ===============================

function flyDetailToCart() {
  let img = document.getElementById("product-image");

  let cart = document.querySelector(".cart-icon");

  if (!img || !cart) return;

  let fly = document.createElement("img");

  fly.src = img.src;

  fly.className = "fly-image";

  document.body.appendChild(fly);

  let start = img.getBoundingClientRect();

  let end = cart.getBoundingClientRect();

  fly.style.left = start.left + "px";

  fly.style.top = start.top + "px";

  setTimeout(() => {
    fly.style.left = end.left + "px";

    fly.style.top = end.top + "px";

    fly.style.width = "35px";

    fly.style.height = "35px";
  }, 100);

  setTimeout(() => {
    fly.remove();
  }, 900);
}

// ===============================
// TOAST
// ===============================

function showToast(message) {
  let toast = document.createElement("div");

  toast.className = "toast-message";

  toast.innerHTML = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  setTimeout(() => {
    toast.classList.remove("show");

    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 2500);
}
