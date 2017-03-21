app.controller("HomeController", function($scope, ImagesFactory, UserService) {
    console.log("HomeController");

    $scope.loggedIn = false;

    $scope.heading = "Welkom op de SPA Demo pagina!";

    $scope.images = ImagesFactory.getAllImages();

    $scope.login = function() {
        if(UserService.login($scope.user.username, $scope.user.password) !== false) {
            $scope.loggedIn = true;
        }
    };
});