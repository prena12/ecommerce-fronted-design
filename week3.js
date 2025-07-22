document.getElementById("addToCart").addEventListener("click", function () {
  const size = document.getElementById("size").value;
  if (!size) {
    alert("Please select a size before adding to cart.");
  } else {
    const img = document.querySelector(".image-section img").src;
    const name = document.querySelector(".details-section h1").textContent;
    const price = document.querySelector(".price").textContent;
    const desc = document.querySelector(".description").textContent;
    const url = `cart.html?img=${encodeURIComponent(img)}&name=${encodeURIComponent(
      name
    )}&price=${encodeURIComponent(price)}&desc=${encodeURIComponent(desc)}`;
    window.location.href = url;
  }
});
