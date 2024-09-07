const products = document.querySelectorAll(".products");
products.forEach((product) => {
  const add_to_cart = product.querySelector(".add-cart");
  const quantity = product.querySelector(".quantity");
  const img = product.querySelector("img");
  add_to_cart.addEventListener("click", () => {
    add_to_cart.style.display = "none";
    quantity.style.display = "flex";
    img.classList.add("selected");
  });
});
