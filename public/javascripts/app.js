/**
 * Created by root on 9/30/15.
 */

'use strict';

var myApp = angular.module('webApp', [
    'ui.router',
    'ngAnimate',
    'controllers',
    'ngResource',
    'ngMaterial',
    'ngMessages',
    'ngMdIcons'

    ]);
myApp.config(function ($stateProvider, $locationProvider) {


        $stateProvider
            .state('/', {
                url: '/',
                templateUrl: 'partials/main'
            })
            .state('about',{
                url: '/about',
                templateUrl: 'partials/about'
            })
            .state('contact',{
                url: '/contact',
                templateUrl: 'partials/contact',
                controller: 'ContactCtrl'
            })
            .state('contact-thankyou', {
                templateUrl: 'partials/contact-thankyou'
            })
            .state('projects',{
                url: '/projects',
                templateUrl: 'partials/projects',
                controller: 'ProjectsCtrl'
            })
            .state('resume',{
                url: '/resume',
                templateUrl: 'partials/resume'
            })
            .state('projectView',{
                url: '/projects/:id/view',
                templateUrl: 'partials/projectDetail',
                controller: 'ProjectViewCtrl'
            });

        $locationProvider.html5Mode(true);
    });

//Resources
myApp.factory('Projects', function($resource) {
    return $resource('/api/projects/:id', { id: '@_id' }); //full endpoint address
});

myApp.factory('Contact', function($resource) {
    return $resource('/api/contact/:id', { id: '@_id' }); //full endpoint address
});

myApp.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('teal', {
          'default': '300',
          'hue-1': '400',
          'hue-2': '800',
          'hue-3': 'A100'
        })
        .accentPalette('blue');

});
