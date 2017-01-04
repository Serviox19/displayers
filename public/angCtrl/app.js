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
      controller: ''
    })
    .state('ny-now', {
      url: '/ny',
      templateUrl: '/views/ny-now.html',
      controller: ''
    })
    .state('toy-fair', {
      url: '/toy',
      templateUrl: '/views/toy-fair.html',
      controller: ''
    })

  $locationProvider.html5Mode(true);
});
