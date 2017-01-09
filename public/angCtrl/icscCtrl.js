var icscCtrl = angular.module('icscCtrl');

icscCtrl.controller('icsc', ['$scope', '$http', function ($scope, $http) {
  $scope.exhibitors = [];

  $http.get('/scrape/icsc').success(function(data) {

  });
}]);
