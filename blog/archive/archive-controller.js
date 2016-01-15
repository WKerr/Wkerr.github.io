(function () {
    "use strict";
    var archiveController = function (blogServ){
        this.blogList = blogServ.list;
    };

    //config.$inject = ["$stateProvider", "$urlRouterProvider", "blogListProvider"];
    archiveController.$inject = ["blogServ"];

    angular.module("blog.archive")
        .controller("archiveController",archiveController);


})();