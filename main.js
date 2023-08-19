

function showSearchBox() {
  var searchBox = document.getElementById("searchBox");
  searchBox.style.display = "block";
}

function search() {
  var searchTerm = document.querySelector("#searchBox input").value;

  console.log("нашел " + searchTerm);
} 

function hideSearchBox() {
  var searchBox = document.getElementById("searchBox");
  searchBox.style.display = "none";
}

function filterProducts() {
  var category = document.getElementById("category").value;
  var products = document.getElementsByClassName("product");

  for (var i = 0; i < products.length; i++) {
    var product = products[i];
    var productCategory = product.getAttribute("data-category");

    if (category === "all" || productCategory === category) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  }
}

function filterProducts() {
  var category = document.getElementById("category").value;
  var products = document.getElementsByClassName("product");

  for (var i = 0; i < products.length; i++) {
    var product = products[i];
    var productCategory = product.getAttribute("data-category");

    if (category === "all" || productCategory === category) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  }
}


 function hideText() {
      var text = document.getElementById("myText");
      text.style.display = "none";
}
    

  function showProductCard() {
      var productCard = document.querySelector('.product-card');
      productCard.style.display = "block";
    }

    function addToCart() {
      var cart = document.getElementById('cart');
      var productCard = document.querySelector('.product-card');
      var clonedProductCard = productCard.cloneNode(true);
      cart.appendChild(clonedProductCard);
    }

    function submitOrder() {
    
      alert('done');
    }






