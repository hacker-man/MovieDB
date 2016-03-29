angular.module("moviedb").controller("MovieFormController",["$scope","APIClient",function($scope,APIClient){
    //scope init
    $scope.model = {};
    //Scope methods
    $scope.saveMovie = function(){
        APIClient.createMovie($scope.model).then(
            function(movie){
                $scope.successMessage = "Movie sved! <a href=\"#movies/"+movie.id+"\">View new movie detail</a>";
                $scope.model = {};
                $scope.movieForm.$setPristine();
                console.log("PELICULA GUARDADA",movie);
            },
            function(error){
                console.log("ERROR AL GUARDAR PELICULA",error);
            }
        )
    }
}]);