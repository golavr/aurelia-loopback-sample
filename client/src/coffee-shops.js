import { inject } from 'aurelia-framework';
import { Config } from 'aurelia-api';

@inject(Config)
export class CoffeeShops {
    constructor(config) {
        // endpoints are defined in configure(aurelia)
        this.apiEndpoint = config.getEndpoint('api');
        this.title = 'Coffee Shops Page';
        this.coffeeShops = [];
    }

    activate() {
        this.getEndpoint()
            .then(result => {
                console.log(result);
                this.coffeeShops = result;
            });
    }

    getEndpoint() {
        return this.apiEndpoint.find('CoffeeShops');
    }
}