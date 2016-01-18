(function () {
    "use strict";
    var homeController = function (blogServ){
        this.blogServ = blogServ;
    };

    homeController.$inject = ["blogServ"];

    angular.module("blog.home")
        .controller("homeController",homeController);


})();