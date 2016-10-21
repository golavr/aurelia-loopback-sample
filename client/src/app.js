import 'bootstrap';

export class App {
  configureRouter(config, router) {
    config.title = 'GA';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: './home', nav: true, title: 'Home' },
      { route: 'coffee-shops', name: 'coffeeShops', moduleId: './coffee-shops', nav:true, title:'Coffee Shops'}
    ]);

    this.router = router;
  }
}
