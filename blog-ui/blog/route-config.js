(function () {
    "use strict";
    var today = new Date();

    var padFirstDigitZero = function (n) {
        if(n < 10) {
            return "0"+n;
        } else {
            return n;
        }
    };

    /**
     * Note: Can not inject services in to the configuration phase of angular.
     * @param $stateProvider
     * @param $urlRouterProvider
     */
    function config($stateProvider, $urlRouterProvider) {

        var monthOffset = 1;

        //Go to the most recent post
        $urlRouterProvider.otherwise([ "$injector","$location",function ($injector, $location) {
            //TODO go to the most recent post based on a list of post
            return "/blog/" + today.getFullYear() + "/" + (today.getMonth() + monthOffset) + "/" + today.getDay();
        }]);

        $stateProvider
            .state("blog", {
                url: "/blog/:year/:month/:day",
                templateUrl: function(params) {
                    return "blog/post-list/"+params.year+"/"+padFirstDigitZero(params.month)+"/"+padFirstDigitZero(params.day)+"/post.html"; }
            })
            .state("about", {
                url:"/about",
                templateUrl: "blog/about/about.html"
            });

    }

    config.$inject = ["$stateProvider", "$urlRouterProvider"];

    angular.module("blog")
        .config(config);

})();