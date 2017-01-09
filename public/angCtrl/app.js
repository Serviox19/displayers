var app = angular.module('exhibitors', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('dashboard', {
      url: '/',
      templateUrl: '/views/home.html',
      controller: ''
    })
    .state('icsc', {
      url: '/icsc',
      templateUrl: '/views/icsc.html',
      controller: 'icsc'
    })
    .state('ny-now', {
      url: '/ny',
      templateUrl: '/views/ny-now.html',
      controller: 'nynow'
    })
    .state('toy-fair', {
      url: '/toy',
      templateUrl: '/views/toy-fair.html',
      controller: 'toyfair'
    })

  $locationProvider.html5Mode(true);
});
