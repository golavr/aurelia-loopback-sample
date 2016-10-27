import environment from './environment';
import { AureliaApiMock } from './aurelia-api-mock';
import { Config } from 'aurelia-api';

//Configure Bluebird Promises.
//Note: You may want to use environment-specific configuration.
Promise.config({
  warnings: {
    wForgottenReturn: false
  }
});

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  configureContainer(aurelia);

  aurelia.start().then(() => aurelia.setRoot());
}

function configureContainer(aurelia) {
  // register mocks 
  if (environment.debug) {
    let container = aurelia.container;
    container.registerInstance(Config, new AureliaApiMock());
  }
  else {
    // REST api hook
    aurelia.use.plugin('aurelia-api', config => {
      // Register hosts
      config.registerEndpoint('api', 'http://localhost:3000/api/');
    });

  }
}
