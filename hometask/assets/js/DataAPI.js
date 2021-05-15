import { HttpClient } from './HttpClient/index.js';

class DataAPI extends HttpClient {
    constructor(){
        super('https://private-anon-59b8ceef68-pizzaapp.apiary-mock.com');
    }

    getPizzaList(){
        return this.get('restaurants/10/menu?category=Pizza&orderBy=rank');
    }
}

export const dataApi = new DataAPI();