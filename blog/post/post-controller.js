(function () {
    "use strict";
    var postController = function (post){
        this.post = post;
    };

    //config.$inject = ["$stateProvider", "$urlRouterProvider", "blogListProvider"];
    postController.$inject = ["blogPost"];

    angular.module("blog.post")
        .controller("postController",postController);


})();