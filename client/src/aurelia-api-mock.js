export class AureliaApiMock {
    constructor() {
        let resourceMap = new Map();
        let coffeeShops = [
            { id: 1, name: 'golan', city: 'haifa' },
            { id: 2, name: 'cs1', city: 'c1' },
            { id: 3, name: 'cs2', city: 'c2' },
            { id: 4, name: 'cs3', city: 'c3' },
            { id: 5, name: 'cs4', city: 'c4' },
        ];
        resourceMap.set('CoffeeShops', coffeeShops);

        this.apiMap = new Map();
        this.apiMap.set('api', new RestMock(resourceMap));
    }

    getEndpoint(name) {
        return this.apiMap.get(name);
    }
}

class RestMock {
    constructor(map) {
        this.map = map;
    }

    find(resource, criteria = {}, options = {}) {
        return Promise.resolve(this.map.get(resource));
    }

    findOne(resource, id, criteria = {}, options = {}) {
        return this.find(resource, criteria, options).then(result => result.find(f => f.id == id));
    }
}