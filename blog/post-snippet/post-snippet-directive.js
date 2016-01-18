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
            scope: {
              postSnippetServ: "=",
              postSnippetIndex: "@"

            },
            controller: "postSnippetController",
            controllerAs: "postSnippetController",
            templateUrl: "blog/post-snippet/post-snippet.html"
        };
    }

    angular.module("blog.post.snippet")
        .directive("postSnippet", post);
})();