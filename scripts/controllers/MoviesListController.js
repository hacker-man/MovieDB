angular.module("moviedb")
    .controller("MoviesListController", ["$scope", "MovieService", "$log", function ($scope, MovieService, $log) {
        //scope init:
        $scope.model = [];
        //Scope watchers:
       
        //Controller start:
        $scope.uiState = 'loading';
        MovieService.getMovies().then(
            //Promesa resuelta:
            function (response) {
                $log.log("SUCCESS", response.data);
                $scope.model = response.data;
                if ($scope.model.length == 0)
                    $scope.uiState = 'blank'
                else {
                    $scope.uiState = 'ideal'

                }
            },
            //Promesa rechazada:
            function (response) {
                $log.error("Error", response);
                $scope.uiState = 'error';
            }
        );
    }]);