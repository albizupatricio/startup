app.controller("MainController", ["$scope", function($scope){
  $scope.title = "My Favourite Movies";
  $scope.movies = [
      "Lord of The Rings: The Return of King",
      "Harry Potter and The Chamber of Secrets",
      "My Name is Sam",
      "Sixth Sense"
    ];
      
    $scope.add = function() {
      $scope.movies.push($scope.input);
      $scope.input = '';
    };

    // remove an item
    $scope.remove = function(index) {
      $scope.movies.splice(index, 1);
    };
}]);
