angular.module("moviedb").controller("SeriesListController", ["$scope", "APIClient", "$log","paths","URL", function ($scope,APIClient, $log,paths,URL) {
        //scope init:
        $scope.model = [];
        $scope.url = URL.resolve;
        //scope methods:
        $scope.getSerieDetailURL = function(serie){
            return URL.resolve(paths.serieDetail,{id:serie.id});
        }
       
        //Controller start:
        $scope.uiState = 'loading';
        APIClient.getSeries().then(
            //Promesa resuelta:
            function (data) {
                $log.log("SUCCESS", data);
                $scope.model = data;
                if ($scope.model.length == 0)
                    $scope.uiState = 'blank'
                else {
                    $scope.uiState = 'ideal'

                }
            },
            //Promesa rechazada:
            function (data) {
                $log.error("Error", data);
                $scope.uiState = 'error';
            }
        );
    }]);