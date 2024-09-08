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

const quantity_box = document.querySelectorAll(".products .quantity");
quantity_box.forEach((quantity_box) => {
  const decrease = quantity_box.querySelector(".decrease");
  decrease.addEventListener("click", () => {
    var quantity = quantity_box.querySelector("span");
    var number = quantity.innerHTML;
    console.log(number);
    num = parseInt(number, 10);
    console.log(num);
    if (num > 0) {
      num = num - 1;
      console.log(num);
      quantity.innerHTML = num;
    } else {
      return;
    }
  });

  const increase = quantity_box.querySelector(".increase");
  increase.addEventListener("click", () => {
    var quantity = quantity_box.querySelector("span");
    var number = quantity.innerHTML;
    console.log(number);
    num = parseInt(number, 10);
    console.log(num);
    num += 1;
    console.log(num);
    quantity.innerHTML = num;
  });
});
