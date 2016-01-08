/**
 * @desc main header bar that runs in all blog posts
 * @example <div blog-content></div>
 */
(function (){
    "use strict";
    angular
        .module("blog.content")
        .directive("blogContent", blogContent);

    function blogContent() {
        return {
            restrict: "A",
            transclude: true,
            scope: true,
            controller: "blogHeader",
            controllerAs: "blogHeader",
        };
    }
})();