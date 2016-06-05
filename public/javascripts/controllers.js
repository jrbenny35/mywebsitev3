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

    $scope.social = [
      {name: 'Linked In', image: 'images/CBpFkPaz.png', link: 'http://linkedin.com/in/benjaminforehandjr'},
      {name: 'Github', image: 'images/github-mark@1200x630.png', link: 'http://github.com/jrbenny35'},
      {name: 'Twitter', image: 'images/twitterimage.png', link: 'https://twitter.com/bigbenjr135'},
      {name: 'Google+', image: 'images/googleplus.jpeg', link: 'https://plus.google.com/+BenjaminForehandJr'},
    ];

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

module.controller('TabCtrl', ['$scope', function ($scope) {

    $scope.tabs = [
      {Title: "Home", content: "This is the home tab"},
      {Title: "About", content: "This is the About Tab"},
      {Title: "Projects"},
      {Title: "Blog"},
      {Title: "Resume"},
    ];

}]);

function DialogController($scope, $mdDialog){
    $scope.hide = function () {
        $mdDialog.hide();
    };

    $scope.cancel = function () {
        $mdDialog.cancel();
    };
};

module.controller('BlogCtrl', ['$scope', 'Blog', '$stateParams', function ($scope, Blog, $stateParams) {

    $scope.posts = Blog.query();

}]);

module.controller('BlogViewCtrl', ['$scope', 'Blog', '$stateParams', function ($scope, Blog, $stateParams) {

    $scope.blog = Blog.get({id: $stateParams.id});

}]);

module.controller('BlogPostCtrl', ['$scope', 'Blog', '$state', function ($scope, Blog, $state) {


    $scope.blog = new Blog();

    $scope.blog.date = new Date();
    $scope.blog.tag = [];

    $scope.blog.author = 'Ben Forehand Jr';

    $scope.addTag = function(){
        $scope.blog.tag.push($scope.blog.newTag);
        $scope.blog.newTag = '';
    };


    $scope.saveBlog = function () {
        $scope.blog.$save().then(function () {
            $state.go('blog');
        });
    };

    $scope.tinyMce = {
      onChange: function(e) {
        // put logic here for keypress and cut/paste changes
      },
      inline: false,
      plugins : 'advlist autolink link image lists charmap print preview',
      skin: 'lightgray',
      theme : 'modern',
      height: 500
    };

}]);

module.controller('BlogEditCtrl', ['$scope', 'Blog', '$state', '$stateParams', function ($scope, Blog, $state, $stateParams) {

  //Edit Post
  $scope.blog = Blog;
  $scope.blog = Blog.get({id: $stateParams.id});

  $scope.blog.tag = [];

  $scope.addTag = function(){
      $scope.blog.tag.push($scope.blog.newTag);
      $scope.blog.newTag = '';
  };

  $scope.saveBlog = function () {
      $scope.blog.$update({id: $stateParams.id}).then(function () {
          $state.go('admin');
      });
  };

  $scope.tinyMce = {
    onChange: function(e) {
      // put logic here for keypress and cut/paste changes
    },
    inline: false,
    plugins : 'advlist autolink link image lists charmap print preview',
    skin: 'lightgray',
    theme : 'modern',
    height: 500
  };
}]);

module.controller('AdminCtrl', ['$scope', 'Blog', '$state', '$stateParams', function ($scope, Blog, $state, $stateParams) {

    $scope.posts = Blog.query();

    // Delete Post
    $scope.deletePost = function(blogId) {
      Blog.delete({id: blogId});
      $state.go('blog');
  };

}]);
