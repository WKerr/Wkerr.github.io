(function () {
    "use strict";
    angular.module("blog")
        .config(config);

    var today = new Date();

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise(
            "blog/"+today.getFullYear()+ "/"+(today.getMonth()+1)+ "/"+today.getDay()
        );

        $stateProvider
            .state("blog", {
                url: "/:year/:month/:day",
                templateUrl: function(params) {
                    return "blog/post-list/"+params.year+"/"+params.month+"/"+params.day+"post.html"; }
            }).state("about",{
                url:"/about",
                templateUrl: "blog/about/about.html"
            });


    }


})();