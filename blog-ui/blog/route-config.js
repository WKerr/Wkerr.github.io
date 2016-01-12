(function () {
    "use strict";

    /**
     * Format the first digit to zero for extra padding.
     * @param n
     * @returns {*}
     */
    var padFirstDigitZero = function (n) {
        if(n < 10 && n.length < 2) {
            return "0"+n;
        } else {
            return n;
        }
    };

    /**
     * Note: Can not inject services in to the configuration phase of angular.
     * When injecting providers make sure to include the word, 'Provider' at the end. Example:. blogListProvider
     * @param $stateProvider
     * @param $urlRouterProvider
     * @param blogListProvider
     */
    function config($stateProvider, $urlRouterProvider, blogListProvider) {

        $urlRouterProvider.otherwise(function () {
            //var recent = blogListProvider.mostRecent();
            return "/";//"/blog/" + recent.year + "/" + recent.month + "/" + recent.day + "/" + recent.file;
        });

        $stateProvider
            .state("home", {
                "url":"/",
                views: {
                    "":{templateUrl: "blog/home/home.html"},
                    "section1@home": {
                        templateUrl: function () {
                            var recent = blogListProvider.mostRecent();
                            return "/blog/blog-list/" + recent.year + "/" + recent.month + "/" + recent.day + "/" + recent.file;
                        },
                        templateProvider: function (params){
                            console.log(params);
                        }
                    }
                }

            })
            .state("blog", {
                url: "/blog/{year:.+}/{month:.+}/{day:.+}/:file",
                views: {
                    "":{
                        templateUrl: function (params) {
                            //Return to home page
                            if (!params.year && !params.month && !params.day) {
                                return "blog/home/home.html";
                            }
                            var search = blogListProvider.searchList(params);
                            return (search.year) ? "blog/blog-list/" + search.year + "/" + search.month + "/" + search.day + "/" + search.file : "404.html";
                        }
                    }

                }
            }).state("archive", {
                url:"/archive",
                templateUrl: "blog/archive/archive.html"
            }).state("about", {
                url:"/about",
                templateUrl: "blog/about/about.html"
            });


    }

    config.$inject = ["$stateProvider", "$urlRouterProvider", "blogListProvider"];

    angular.module("blog")
        .config(config);

})();