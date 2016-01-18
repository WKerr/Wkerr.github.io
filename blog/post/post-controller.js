(function () {
    "use strict";
    var postController = function ($scope,blogPost){
        this.post = blogPost;
        $scope.post = blogPost;
        //$scope.disqusUrl=  "/blog/blog-list/" + recent.year + "/" + recent.month + "/" + recent.day + "/" + recent.file;
    };

    //config.$inject = ["$stateProvider", "$urlRouterProvider", "blogListProvider"];
    postController.$inject = ["$scope","blogPost"];

    angular.module("blog.post")
        .controller("postController",postController);


})();