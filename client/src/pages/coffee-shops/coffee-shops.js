import { inject } from 'aurelia-framework';
import { Config } from 'aurelia-api';

@inject(Config)
export class CoffeeShops {
    constructor(api) {
        // endpoints are defined in configure(aurelia)
        this.apiEndpoint = api.getEndpoint('api');
        this.title = 'Coffee Shops Page';
        this.coffeeShops = [];
    }

    activate() {
        this.apiEndpoint.find('CoffeeShops')
            .then(result => {
                console.log(result);
                this.coffeeShops = result;
            });
    }
}