(function () {
    "use strict";

    var blogList = function () {
        var list = [{
            "date": "2016-01-08",
            "year": "2016",
            "month": "01",
            "day": "08",
            "file": "SonarQube_Tutorial_Import_Generic_Reports_p1.html",
            "name": "SonarQube Tutorial - Import Generic Reports Part 1",
            "desc":"This tutorial will cover how to set up your environment for sonarQube development. The topics needed to build your own generic report plugin will follow."
        }];


        var api = {
            list: list
        };

        /**
         *
         * @param listIndex
         * @returns {{date, year, month, day, file, name, desc}|*}
         */
        var mostRecent = function (listIndex) {
            listIndex = listIndex || 0;
            return list[listIndex];
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