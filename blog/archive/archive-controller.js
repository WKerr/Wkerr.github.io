(function () {
    "use strict";
    var archiveController = function (blogServ){
        this.blogList = blogServ.list;
    };

    archiveController.$inject = ["blogServ"];

    angular.module("blog.archive")
        .controller("archiveController",archiveController);


})();