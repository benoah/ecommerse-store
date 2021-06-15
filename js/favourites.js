import { getExistingFavs } from "./utils/getExistingFavs.js";
let favourites = [];


function createList() {
  const productContainer = document.querySelector(".product-container");
  let favourites = getExistingFavs();

  if (favourites.length === 0) {
    productContainer.innerHTML = "No products yet";
  }

  favourites.forEach((favourite) => {
   
    // console.log(favourite);
    productContainer.innerHTML += `
    <div class="col s12 l4">
    <div class="card card large ">
    <div class="card-image">
    <img src="${favourite.image}" />
  </div>
  <div class="card">
      <a href="" class="halfway-fab btn-floating pink pulse">
      <i  class="delete-container fa fa-trash" data-id="${favourite.id}"></i>        
  </a>
  </div>
      <div class="card-content">
      <span class="card-title">${favourite.name}</span>
        <p>${favourite.description}</p>
      </div>
      <div class="card-action">
      <a href="">${favourite.release}</a>
      <a href="">${favourite.store}</a>
      </div>
    </div>
    </div>`;
  });  

  const favButtons = document.querySelectorAll(".card i");
    favButtons.forEach((button) => {
        button.addEventListener("click", handleClick);
    });
    
}
function handleClick(event) {
  const id = this.dataset.id;
  const currentFavs = getExistingFavs();

  const productExists = currentFavs.find(function (fav) {
    return fav.id === id;
});






}


createList();

