(function () {
    "use strict";
    //TODO disqus
    //TODO google analytics

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
            return "/";
        });

        var homeSectionTemplate = function (listIndex) {
            var recent = blogListProvider.mostRecent(listIndex);
            if (!recent || !recent.year) { return null; }
            return "/blog/blog-list/" + recent.year + "/" + recent.month + "/" + recent.day + "/" + recent.file;
        };

        $stateProvider
            .state("home", {
                "url":"/",
                views: {
                    "":{templateUrl: "blog/home/home.html"},
                    "blog1@home": {
                        templateUrl: homeSectionTemplate(0),
                        controller: "postController",
                        controllerAs: "postController",
                        resolve: {
                            "blogPost": function ($http, $stateParams) {
                                var search = blogListProvider.searchList($stateParams);
                                return search;
                            }
                        }
                    },"blog2@home": {
                        templateUrl: homeSectionTemplate(1)
                    },"blog3@home": {
                        templateUrl: homeSectionTemplate(2)
                    },"blog4@home": {
                        templateUrl: homeSectionTemplate(3)
                    },"blog5@home": {
                        templateUrl: homeSectionTemplate(4)
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
                            //return "blog/post/post.html";//(search.year) ? "blog/blog-list/" + search.year + "/" + search.month + "/" + search.day + "/" + search.file : "404.html";
                            return (search.year) ? "blog/post/post.html" : "404.html";
                        },
                        controller: "postController",
                        controllerAs: "postController",
                        resolve: {
                            "blogPost": function ($http, $stateParams) {
                                var search = blogListProvider.searchList($stateParams);
                                return search;
                            }
                        }
                    },
                    "body@blog":{
                        templateUrl: function (params) {
                            var search = blogListProvider.searchList(params);
                            return (search.year) ? "blog/blog-list/" + search.year + "/" + search.month + "/" + search.day + "/" + search.file : "404.html";
                        }
                    },
                    "footer@blog":{
                        templateUrl: function (params) {
                            return "blog/disqus/disqus.html";
                        }
                    }

                }
            }).state("archive", {
                url:"/archive",
                templateUrl: "blog/archive/archive.html",
                controller: "archiveController",
                controllerAs: "archiveController",
                resolve: { "blogServ": function () {
                    return blogListProvider;
                } }

            }).state("about", {
                url:"/about",
                templateUrl: "blog/about/about.html"
            });


    }

    config.$inject = ["$stateProvider", "$urlRouterProvider", "blogListProvider"];

    angular.module("blog")
        .config(config);

})();