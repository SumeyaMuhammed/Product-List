const products = document.querySelectorAll(".products");
products.forEach((product) => {
  const added_cart = document.querySelector(".added-cart");
  const empty_cart = document.querySelector(".empty-cart");
  result = 0;

  const add_to_cart = product.querySelector(".add-cart");
  const quantity = product.querySelector(".quantity");
  const img = product.querySelector("img");
  add_to_cart.addEventListener("click", () => {
    add_to_cart.style.display = "none";
    quantity.style.display = "flex";
    img.classList.add("selected");

    const decrease = product.querySelector(".decrease");
    decrease.addEventListener("click", () => {
      var quantity = product.querySelector(".quantity span");
      var number = quantity.innerHTML;
      console.log(number);
      num = parseInt(number, 10);
      if (num > 0) {
        num = num - 1;
        quantity.innerHTML = num;
        result -= 1;
        total_item.innerHTML = result;
      } else {
        return;
      }
      if (result == 0) {
        empty_cart.style.display = "block";
        added_cart.style.display = "none";
      }
    });

    const increase = product.querySelector(".increase");
    increase.addEventListener("click", () => {
      var quantity = product.querySelector(".quantity span");
      console.log(quantity);
      var number = quantity.innerHTML;
      console.log(number);
      num = parseInt(number, 10);
      num += 1;
      quantity.innerHTML = num;
      console.log(quantity.innerHTML);
      result += 1;
      total_item.innerHTML = result;
      empty_cart.style.display = "none";
      added_cart.style.display = "block";
    });
  });
});

const quantity_box = document.querySelectorAll(".products .quantity");
var total_item = document.querySelector(".ordered-cart h2 span");

const added_list = document.querySelectorAll("ul");
added_list.forEach((list) => {
  const item_name = list.querySelector("h4");
  const item_count = list.querySelector(".item-count");
  const item_price = list.querySelector(".item-price");
  const total_price = list.querySelector(".total-price");
});

quantity_box.forEach((quantity_box) => {});
