import { baseUrl } from "./settings/api.js";
import { displayMessage } from "./components/displayMessage.js";
import { getExistingFavs } from "./utils/getExistingFavs.js";

document.addEventListener('DOMContentLoaded', function() {
    var cars = document.querySelectorAll('.carousel');
     M.Carousel.init(cars, {
         duration:1000,
         padding:64,
     });
  });

const productContainer = document.querySelector(".product-container");
const productsUrl = baseUrl + "products";
const favourites = getExistingFavs();
let allProducts;

async function getProducts() {
    try {
        const response = await fetch(productsUrl);
        const json = await response.json();
        const products = json;
        allProducts = products;
        rennderProducts(products);
        //  searchProducts(products)
    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".product-container");
    }
}
getProducts();

function rennderProducts(productsTorender) {
    productContainer.innerHTML = "";

    productsTorender.forEach(function (product) {
        console.log(productsTorender);
        let cssClass = "far";
        console.log(product);
        const doesObjectExist = favourites.find(function (fav) {
            return parseInt(fav.id) === product.id;
        });
        if (doesObjectExist) {
            cssClass = "fa";
        }

        productContainer.innerHTML += `
        <div class="col s12 l4">
        <div class="card card large ">
        <div class="card-image">
        <img src="${product.image}" />
      </div>
      <div class="card">
      <a href="" class="halfway-fab btn-floating pink pulse">
      <i class="${cssClass} fa-heart" data-description="${product.description}" data-store="${product.store}" data-release="${product.release}" data-image="${product.image}" data-id="${product.id}" data-name="${product.brand}"></i>
      </a>
      </div>

          <div class="card-content">
          <span class="card-title">${product.brand} ${product.model}</span>
            <p>${product.description}</p>
          </div>
          <div class="card-action">
          <a href="">${product.release}</a>
          <a href="">${product.store}</a>
          </div>
        </div>
        </div>
       `;
    });
    const favButtons = document.querySelectorAll(".card i");
    favButtons.forEach((button) => {
        button.addEventListener("click", handleClick);
    });
    


}

function handleClick(event) {
    event.preventDefault();

    // console.log(event);
    this.classList.toggle("fa");
    this.classList.toggle("far");
    const name = this.dataset.name;
    const id = this.dataset.id;
    const image = this.dataset.image;
    const release = this.dataset.release;
    const store = this.dataset.store;
    const description = this.dataset.description;
    const model = this.dataset.model;

    const currentFavs = getExistingFavs();
    //  console.log(currentFavs);
    const productExists = currentFavs.find(function (fav) {
        return fav.id === id;
    });

    if (!productExists) {
        const product = {
            id: id,
            name: name,
            image: image,
            release: release,
            store: store,
            description: description,
            model: model,
        };
        currentFavs.push(product);
        saveFavs(currentFavs);
    } else {
        const newFavs = currentFavs.filter((fav) => fav.id !== id);
        saveFavs(newFavs);
    }
}

function saveFavs(favs) {
    localStorage.setItem("favourites", JSON.stringify(favs));
}

const search = document.querySelector(".search");
search.onkeyup = function (event) {
    console.log("allProducts: ", allProducts);
    const searchValue = event.target.value.trim().toLowerCase();

    const filteredProducts = allProducts.filter(function (product) {
        if (product.brand.toLowerCase().startsWith(searchValue)) {
            return true;
        }
    });
    rennderProducts(filteredProducts);
};


/**
 * 
 *     <div class="container">
        <h2>Favourites</h2>
        <input placeholder="New item" /><button class="indigo btn waves-effect waves-light" type="button">
            Add
        </button>
        <button class="btn pink" id="clear" type="button">Clear</button>
    </div>
    <div class="product-container"></div>
 */