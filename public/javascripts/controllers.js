/**
 * Created by root on 10/1/15.
 */
'use strict';

var module = angular.module('controllers',[
]);

module.controller('ProjectsCtrl', ['$scope', 'Projects', function ($scope, Projects ) {

    $scope.projects = Projects.query();

}]);

module.controller('ProjectViewCtrl', ['$scope', 'Projects', '$stateParams', function ($scope, Projects, $stateParams ) {

    $scope.projects = Projects.get({ id: $stateParams.id });

}]);

module.controller('ContactCtrl', ['$scope', 'Contact', '$http', '$state', function ($scope, Contact, $http, $state) {


    $scope.contact = new Contact();

    $scope.saveContact = function(){

        $scope.contact.$save().then(function(){
            $state.go('contact-thankyou');
        });
    };
}]);//End ContactCtrl

module.controller('LeftCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {

    $scope.toggleSidenav = function () {
        $mdSidenav('left').toggle();
    };


    $scope.close = function () {
      $mdSidenav('left').close();
    }

}]);

module.controller('RightNavCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {

    $scope.toggleSidenav = function () {
        $mdSidenav('right').toggle();
    }

}]);

module.controller('ResumeCtrl', ['$scope', '$mdDialog', function ($scope, $mdDialog) {

    $scope.showDialog = function (ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'partials/resumeDialog',
            parent:
                angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
        })
    };

}]);

function DialogController($scope, $mdDialog){
    $scope.hide = function () {
        $mdDialog.hide();
    };

    $scope.cancel = function () {
        $mdDialog.cancel();
    };
}