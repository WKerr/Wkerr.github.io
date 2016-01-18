(function () {
    "use strict";
    var postSnippetController = function ($scope){
        this.postIndex = ($scope.postSnippetIndex)? parseInt($scope.postSnippetIndex): null;
        this.blogServ = $scope.postSnippetServ;
        $scope.post = this.blogServ.mostRecent(this.postIndex)
    };

    postSnippetController.prototype.getContentUrl = function () {
        var post = this.blogServ.mostRecent(this.postIndex);
        if (!post || !post.year) { return null; }
        return "blog/blog-list/" + post.year + "/" + post.month + "/" + post.day + "/" + post.file;
    };

    postSnippetController.$inject = ["$scope"];

    angular.module("blog.post.snippet")
        .controller("postSnippetController",postSnippetController);


})();