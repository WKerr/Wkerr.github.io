(function () {
    "use strict";

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
            var recent = blogListProvider.mostRecent();
            return "/blog/" + recent.year + "/" + recent.month + "/" + recent.day + "/" + recent.file;
        });

        $stateProvider
            .state("blog.home", {
                url:"/blog",
                templateUrl: "blog/home/home.html"
            })
            .state("blog", {
                url: "/blog/{year:.+}/{month:.+}/{day:.+}/*",
                templateUrl: function(params) {
                    var search = blogListProvider.searchList(params);
                    // /blog/blog-list/2016/01/08/post.html
                    return (search.year)?"blog/blog-list/" + search.year + "/" + padFirstDigitZero(search.month) + "/" + padFirstDigitZero(search.day) + "/"+search.file:"404.html";

                }
            }).state("archive", {
                url:"/archive",
                templateUrl: "blog/archive/archive.html"
            })
            .state("about", {
                url:"/about",
                templateUrl: "blog/about/about.html"
            });

    }

    config.$inject = ["$stateProvider", "$urlRouterProvider", "blogListProvider"];

    angular.module("blog")
        .config(config);

})();