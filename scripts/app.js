//Defino el módulo "moviedb"
angular.module("moviedb", ['ngRoute'])
    .config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when('/movies', {
            templateUrl: 'views/SeriesList.html'
        }).when('/series', {
            templateUrl: 'views/PeopleList.html'
        }).when('/',{
            redirectTo: '/movies'
        }).otherwise({
            templateUrl: 'views/404.html'
        })
    }]
);