var pathExtLibs = "../bower_components/";

require.config({
  baseUrl: ".",
  map: {
    '*': {
      'css': pathExtLibs + '/require-css/css.min'
    }
  },

  shim: {
    'app': ['angular', 'app.route', 'angular-route', 'angular-timer', 'css!/app/styles/styles'],
    'app.route': ['angular'],
    'angular-route': ['angular'],
    'angular-timer': ['angular', 'moment', 'humanize-duration']
      //'flight': ['app']
  },

  // alias libraries paths
  paths: {
    'angular': [
      'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular.min',
      pathExtLibs + 'angular/angular.min'
    ],
    'angular-route': [
      'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular-route.min',
      pathExtLibs + 'angular-route/angular-route.min'
    ],
    'angular-timer': [
      'https://cdnjs.cloudflare.com/ajax/libs/angular-timer/1.3.4/angular-timer.min',
      pathExtLibs + 'angular-timer/dist/angular-timer.min'
    ],
    'moment': pathExtLibs + 'moment/min/moment.min',
    'humanize-duration': pathExtLibs + 'humanize-duration/humanize-duration',
    'app': '../app/script/app',
    'app.route': '../app/script/app.route',
    //'flight': 'components/flight/flight.component'
  },

  // kick start application
  deps: ['app']

});
