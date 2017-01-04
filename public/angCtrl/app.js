var app = angular.module('exhibitors', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('icsc', {
      url: '/icsc',
      templateUrl: '/public/views/',
      controller: ''
    })
    .state('ny-now', {
      url: '/ny-now',
      templateUrl: '/public/views/',
      controller: ''
    })
    .state('toy-fair', {
      url: '/toy-fair',
      templateUrl: '/public/views/',
      controller: ''
    })

    $locationProvider.html5Mode(true);
});
