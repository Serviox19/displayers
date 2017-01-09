var toyCtrl = angular.module('toyCtrl');

toyCtrl.controller('toyfair', ['$scope', '$http', function ($scope, $http) {
  $scope.exhibitors = [];

  $http.get('/scrape/toyfair').success(function(data) {

  });
}]);
