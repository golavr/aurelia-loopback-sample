export class App {
  configureRouter(config, router) {
    config.title = 'GA';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: './pages/home/home', nav: true, title: 'Home' },
      { route: 'coffee-shops', name: 'coffeeShops', moduleId: './pages/coffee-shops/coffee-shops', nav: true, title: 'Coffee Shops' }
    ]);

    this.router = router;
  }
}
