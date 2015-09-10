(function () { // wrap the entire app in a closure: 'it's a good habit to get into'
    var app = angular.module('visboys', ['visboys-forum']);

    // TODO krcl ui-router
    //app.config();


    app.controller('LoginController', function () {
        this.user = login1;
    });

    var login1 = {
        name: 'Admin',
        email: 'admin@gmail.com',
        description: 'lalala',
        isModerator: false
    };


    app.controller('TabController', function() {
        this.tab = 'homeTab';

        this.selectTab = function (setTab) {
            this.tab = setTab;
        };
        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        };
    });




    //TODO krcl matches?
    app.controller('MatchController', function () {
        this.matches = myMatches;
    });
    var myMatches = [

    ];



})();

