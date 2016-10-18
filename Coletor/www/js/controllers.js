angular.module('app.controllers', [])

.controller('loginCtrl', function ($scope, $stateParams, $ionicPopup, Api, LoginService, $state) {

$scope.usuario = {};

$scope.login = function () {

    LoginService.loginUser($scope.usuario.username, $scope.usuario.password).then( function(response) {
             console.log(response.data);
         }, function(response) {
           console.log(response);

        });

}})
