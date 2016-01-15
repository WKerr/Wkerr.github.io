/**
 * @desc main header bar that runs in all blog posts
 * @example <div blog-content></div>
 */
(function (){
    "use strict";

    function post() {
        return {
            restrict: "A",
            transclude: true,
            scope: true,
            controller: "postController",
            controllerAs: "postController"
        };
    }

    angular
        .module("blog.post")
        .directive("post", post);
})();