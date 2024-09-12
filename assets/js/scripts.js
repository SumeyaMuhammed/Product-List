const products = document.querySelectorAll(".products");
const added_list = document.querySelector(".added-cart ul");
const modal = document.querySelector(".order-confirmation");
const confirmed_list = document.querySelector(".order-confirmation ul");

products.forEach((product) => {
  const added_cart = document.querySelector(".added-cart");
  const empty_cart = document.querySelector(".empty-cart");
  var total_item = document.querySelector(".ordered-cart h2 span");
  const quantity_div = product.querySelector(".quantity");
  const img = product.querySelector("img");
  const list_name = product.querySelector(".caption h3").innerHTML;
  const list_price = product.querySelector(".caption p span").innerHTML;
  const list_price_ammount = parseFloat(list_price);
  var list_count = product.querySelector(".quantity span").innerHTML;
  const all_total = document.querySelectorAll(".total-order h1");

  result = 0;
  totalPrice = 0;

  const add_to_cart = product.querySelector(".add-cart");
  add_to_cart.addEventListener("click", () => {
    add_to_cart.style.display = "none";
    quantity_div.style.display = "flex";
    img.classList.add("selected");
  });

  const decrease = product.querySelector(".decrease");
  decrease.addEventListener("click", () => {
    var quantity = product.querySelector(".quantity span");
    var number = quantity.innerHTML;
    // console.log(number);
    num = parseInt(number, 10);
    if (num > 0) {
      num = num - 1;
      quantity.innerHTML = num;
      result -= 1;
      total_item.innerHTML = result;
    } else {
      return;
    }

    totalPrice = totalPrice - list_price_ammount;
    all_total.forEach((all_total) => {
      all_total.innerHTML = "$" + totalPrice.toFixed(2);
    });

    cart_list();
    displayed_box();
  });

  const increase = product.querySelector(".increase");
  increase.addEventListener("click", () => {
    var quantity = product.querySelector(".quantity span");
    // console.log(quantity);
    var number = quantity.innerHTML;
    // console.log(number);
    num = parseInt(number, 10);
    num += 1;
    quantity.innerHTML = num;
    // console.log(quantity.innerHTML);
    result += 1;
    total_item.innerHTML = result;

    totalPrice = totalPrice + list_price_ammount;
    all_total.forEach((all_total) => {
      all_total.innerHTML = "$" + totalPrice.toFixed(2);
    });

    cart_list();
    displayed_box();
  });

  function cart_list() {
    let existingItem = document.querySelector(`[data-item="${list_name}"]`);

    if (existingItem) {
      // your cart list
      let editedAmount = existingItem.querySelector(".item-count");
      if (num > 0) {
        editedAmount.textContent = num + "x";
      } else {
        added_list.removeChild(existingItem);
      }
      let editedTotal = existingItem.querySelector(".each-total");
      let each_total_amount = list_price_ammount * num;
      editedTotal.innerHTML = "$" + each_total_amount.toFixed(2);
    } else {
      // cart list
      li_1 = document.createElement("li");
      li_1.setAttribute("data-item", list_name);

      const div = document.createElement("div");
      const name = document.createElement("h4");
      name.innerHTML = list_name;

      const inner_div = document.createElement("div");
      inner_div.classList.add("quantity");

      const amount = document.createElement("p");
      amount.classList.add("item-count");
      amount.innerHTML = num + "x";

      const price = document.createElement("p");
      price.classList.add("item-price");
      price.innerHTML = "&#64;" + list_price;

      const each_total = document.createElement("p");
      each_total.classList.add("each-total");
      var each_total_amount = list_price_ammount * num;
      each_total.innerHTML = "$" + each_total_amount.toFixed(2);
      each_total.classList.add("total-price");

      const remove_icon = document.createElement("div");
      remove_icon.classList.add("remove-item");
      remove_icon.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>';

      inner_div.append(amount, price, each_total);
      div.append(name, inner_div);
      li_1.append(div, remove_icon);
      added_list.append(li_1);

      // remove list function
      remove_icon.addEventListener("click", function () {
        let parentList = this.parentNode;
        parentList.parentNode.removeChild(parentList);
        let quantity = product.querySelector(".quantity span");
        result -= parseInt(quantity.innerHTML);
        total_item.innerHTML = result;
        // console.log(result);
        // num = 0;
        quantity.innerHTML = "0";
        displayed_box();
        add_to_cart.style.display = "flex";
        quantity_div.style.display = "none";
        img.classList.remove("selected");
        removedTotal = list_price_ammount * num;
        console.log(removedTotal, num, list_price_ammount);
        totalPrice = totalPrice - removedTotal;
        all_total.forEach((all_total) => {
          all_total.innerHTML = "$" + totalPrice.toFixed(2);
        });
      });
    }
    const Confirm_button = document.querySelector(".Confirm_button");
    Confirm_button.addEventListener("click", confirm);
  }

  function displayed_box() {
    if (result == 0) {
      empty_cart.style.display = "flex";
      added_cart.style.display = "none";
    } else {
      empty_cart.style.display = "none";
      added_cart.style.display = "block";
    }
  }

  function confirm() {
    // console.log(added_list);
    const confirmed_ul =
      this.previousElementSibling.previousElementSibling.previousElementSibling;
    console.log(confirmed_ul);
    console.trace();

    const confirmed_li = confirmed_ul.querySelectorAll("li");
    // console.log(confirmed_li);
    // console.trace();
    confirmed_list.innerHTML = "";
    confirmed_li.forEach((list) => {
      // console.log(list);
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

      const name = document.createElement("h4");
      name.innerHTML = list.querySelector("div h4").innerHTML;
      const amount = document.createElement("p");
      amount.classList.add("item-count");
      amount.innerHTML = list.querySelector(
        "div .quantity .item-count"
      ).innerHTML;
      const price = document.createElement("p");
      price.innerHTML = list.querySelector(
        "div .quantity .item-price"
      ).innerHTML;
      const each_total = document.createElement("p");
      each_total.innerHTML = list.querySelector(
        "div .quantity .each-total"
      ).innerHTML;

      const clonedImg = img.cloneNode(true);
      image_div.append(clonedImg);
      const clonedName = name.cloneNode(true);
      name_container.append(clonedName);
      info_container.append(amount, price);
      item_detail.append(name_container, info_container);
      const clonedTotal = each_total.cloneNode(true);
      total.append(clonedTotal.textContent);
      li_2.append(image_div, item_detail, each_total);
      confirmed_list.append(li_2);
      console.log(confirmed_list);
    });

    modal.style.display = "flex";
  }

  const back_to_order = document.querySelector(".btn2");
  back_to_order.addEventListener("click", function () {
    modal.style.display = "none";
    empty_cart.style.display = "flex";
    added_cart.style.display = "none";
    const ul = added_cart.querySelector("ul");
    ul.innerHTML = "";

    products.forEach((product) => {
      add_to_cart.style.display = "flex";
      quantity_div.style.display = "none";
      img.classList.remove("selected");
    });

    const all_amount = document.querySelectorAll(".quantity span");
    all_amount.forEach((amount) => {
      // console.log(amount);
      amount.innerHTML = "0";
    });
    result = 0;
    total_item.innerHTML = result;

    totalPrice = 0;
    all_amount.innerHTML = totalPrice.toFixed(2);
  });
});

// confirmed order list
