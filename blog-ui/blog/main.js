(function () {
    "use strict";
    angular.module("blog", [
        /* core */
        "blog.core",

        /* post-list */
        "blog.list"
    ]);

    angular.module("blog.core", [
        "ui.router",
        "ngRoute"
    ]);
})();
