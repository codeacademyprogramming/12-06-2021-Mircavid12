import {dataApi} from "../DataAPI.js";
class Card {
    items= document.querySelector("#dishes .cards");
    cards = dataApi.getPizzaList();

    returnPizzas(){
        this.cards.then((articles)=>{
            console.log(this.items)
            articles.forEach(element => {
                this.items.innerHTML +=
                `<div class="col-lg-3">
                <div class="card">
                  <img src="./assets/images/pizza${element.id}.png" alt="" />
                  <h4 class="pizza-name">${element.name}</h4>
                  <p class="ingredients">
                    ${element.topping? element.topping: " "}
                  </p>
                  <span class="card-cost">${element.price} MAH</span>
                  <div class="show-features mx-auto">
                    <i class="fas fa-shopping-bag"></i>
                  </div>
                  <div class="sizes-overlay hidden">
                    <h3>Sizes:</h3>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        small - 20cm
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        medium - 20cm
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        big - 20cm
                      </label>
                    </div>
                    <button class="btn btn-primary add-basket-btn">
                      Add to basket
                    </button>
                  </div>
                </div>
              </div>`;
              document.querySelectorAll(".show-features i").forEach((btn, index)=>{
                btn.addEventListener("click", function(e){
                    let overlay = document.querySelectorAll(".sizes-overlay");
                    overlay[index].classList.toggle("show");
                })
            })
            });
        })
    }
}

export const pizza = new Card(); 