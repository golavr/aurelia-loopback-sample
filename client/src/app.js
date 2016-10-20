import 'bootstrap';

export class App {
  configureRouter(config, router) {
    config.title = 'GA';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: './home', nav: true, title: 'Home' },
      { route: 'coffeeshops', name: 'coffeeshops', moduleId: './coffee-shops', nav:true, title:'Coffee Shops'}
    ]);

    this.router = router;
  }
}
