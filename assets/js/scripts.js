const products = document.querySelectorAll(".products");
const added_list = document.querySelector(".added-cart ul");
const confirmed_list = document.querySelector(".order-confirmation ul");
products.forEach((product) => {
  const added_cart = document.querySelector(".added-cart");
  const empty_cart = document.querySelector(".empty-cart");
  var total_item = document.querySelector(".ordered-cart h2 span");
  const quantity = product.querySelector(".quantity");
  const img = product.querySelector("img");
  const ul = document.querySelectorAll("ul");
  const list_name = product.querySelector(".caption h3").innerHTML;
  const list_price = product.querySelector(".caption p span").innerHTML;
  const list_price_ammount = parseFloat(list_price);
  var list_count = product.querySelector(".quantity span").innerHTML;
  result = 0;

  const add_to_cart = product.querySelector(".add-cart");
  add_to_cart.addEventListener("click", () => {
    add_to_cart.style.display = "none";
    quantity.style.display = "flex";
    img.classList.add("selected");
  });

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

    li_1 = document.createElement("li");
    const div = document.createElement("div");
    const name = document.createElement("h4");
    name.innerHTML = list_name;
    const inner_div = document.createElement("div");
    inner_div.classList.add("quantity");
    const amount = document.createElement("p");
    amount.innerHTML = num + "x";
    amount.classList.add("item-count");
    const price = document.createElement("p");
    price.innerHTML = "&#64;" + list_price;
    price.classList.add("item-price");
    const each_total = document.createElement("p");
    each_total.classList.add("total-price");
    var each_total_amount = list_price_ammount * num;
    each_total.innerHTML = "$" + each_total_amount.toFixed(2);
    const remove_icon = document.createElement("div");
    remove_icon.classList.add("remove-item");
    remove_icon.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>';
    inner_div.append(amount, price, each_total);
    div.append(name, inner_div);
    li_1.append(div, remove_icon);
    added_list.append(li_1);

    const li_2 = document.createElement("li");
    const image_div = document.createElement("div");
    image_div.classList.add("image");
    const item_detail = document.createElement("div");
    item_detail.classList.add("item_detail");
    const name_container = document.createElement("div");
    name_container.classList.add("item-name-container");
    const info_container = document.createElement("div");
    info_container.classList.add("item-info-container");
    const total = document.createElement("div");
    total.classList.add("total");

    image_div.append(img);
    const clonedName = name.cloneNode(true);
    name_container.append(clonedName);
    const clonedAmount = amount.cloneNode(true);
    console.log(amount);
    const clonedPrice = price.cloneNode(true);

    info_container.append(clonedAmount, clonedPrice);
    item_detail.append(name_container, info_container);
    const clonedTotal = each_total.cloneNode(true);
    total.append(clonedTotal.textContent);
    li_2.append(image_div, item_detail, total);
    confirmed_list.append(li_2);
    console.log(confirmed_list);
  });
});
