var nyCtrl = angular.module('nyCtrl');

nyCtrl.controller('nynow', ['$scope', '$http', function ($scope, $http) {
  $scope.exhibitors = [];

  $http.get('/scrape/nynow').success(function(data) {

  });
}]);
