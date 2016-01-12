(function () {
    "use strict";

    var blogList = function () {
        var list = [{
            "date": "2016-01-08",
            "year": "2016",
            "month": "01",
            "day": "08",
            "name": "test post",
            "file": "post.html"
        }];


        var api = {
            list: list
        };

        var mostRecent = function () {
            return list[0];
        };

        var searchList = function (params){
            var found = {};
            var isMatch = true;
            for (var listIndex = 0; listIndex < list.length; listIndex=listIndex+1){
                for (var property in params){
                    if (list[listIndex][property] !== params[property]) {
                        isMatch = false;
                        break;
                    }
                }
                if (isMatch){
                    found = list[listIndex];
                    break;
                } else {
                    isMatch = true;
                }

            }
            return found;
        };

        var provider = {
            $get: function () { return api; },
            api:api,
            list:list,
            mostRecent: mostRecent,
            searchList: searchList
        };

        return provider;
    };

    /**
     * When injecting providers make sure to include the word, 'Provider' at the end. Example:. blogListProvider
     */
    angular
        .module("blog.list")
        .provider("blogList", blogList);


})();