(function () {
    "use strict";

    var blogList = function blogList() {
        var bl = this;
        bl.list = [{
            "date": "2016-01-08",
            "name": "test post",
            "file": "post.html"
        }];



        bl.getMostRecent = function () {

        };

        return new blogList;
    };

    angular
        .module("blog.list")
        .provider("blogList", blogList);

})();