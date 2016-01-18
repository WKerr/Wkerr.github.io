(function () {
    "use strict";
    angular.module("blog", [
        /* core */
        "blog.core",

        /* modules */
        "blog.modules",

        /* Disqus */
        "angularUtils.directives.dirDisqus",

        /* analytics */
        "angulartics",
        "angulartics.google.analytics"
    ]);

    angular.module("blog.core", [
        "ui.router",
        "ngRoute"
    ]);

    angular.module("blog.modules", [
        "blog.list",
        "blog.archive",
        "blog.home",
        "blog.post",
        "blog.post.snippet"
    ]);

})();
