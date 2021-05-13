import {pizza} from "./cards/card.js";

class App{
    datas(){
        pizza.returnPizzas();
    }
}

let main = new App();
main.datas(); 