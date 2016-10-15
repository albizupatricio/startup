app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html"
    })
    .when("/Lord of The Rings: The Return of King", {
        templateUrl : "lor.html"
    })
    .when("/Harry Potter and The Chamber of Secrets", {
        templateUrl : "hp2.html"
    })
    .when("/My Name is Sam", {
        templateUrl : "sam.html"
    })
    .when("/Sixth Sense", {
        templateUrl : "ss.html"
    });
});

app.controller("MainController", ["$scope", function($scope){
  $scope.title = "My Favourite Movies";
  $scope.movies = [{
      name: "Lord of The Rings: The Return of King"
  },
  {
      name: "Harry Potter and The Chamber of Secrets"
  },
  {
      name: "My Name is Sam"
  },
  {
      name: "Sixth Sense"
  }];
}]);
