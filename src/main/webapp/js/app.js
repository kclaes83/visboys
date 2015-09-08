(function () { // wrap the entire app in a closure: 'it's a good habit to get into'
    var app = angular.module('visboys', []);

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


    app.controller('ForumController', function($scope) {
        $scope.currentThread;
        this.forums = myForums;

        $scope.selectThread = function(selectedThread) {
            $scope.currentThread = selectedThread;
        };
        this.isSelected = function (checkThread) {
            return this.currentThread === checkThread;
        };
    });

    app.controller('PostController', function () {
        this.post = {};

        this.addPost = function (currentThread) {
            this.post.creationDate = Date.now();
            currentThread.posts.push(this.post);
            this.post = {};
        };
    });

    //TODO krcl matches?
    app.controller('MatchController', function () {
        this.matches = myMatches;
    });
    var myMatches = [

    ];




    ///////////////////////
    // Custom Directives //
    ///////////////////////
    app.directive('post', function () {
        return {
            // Directive definition object
            restrict: 'E',  // E = Element html
            templateUrl: 'customDirectives/post.html'
        };
    });






    var myForums = [
        {
            name: 'Main forumCtrl',
            description: ' .... ',
            subForums: [
                {
                    name: 'Sub forumCtrl level 1',
                    description: 'This can be tactics forumCtrl',
                    subForums: [
                        {
                            name: 'Sub forumCtrl level 2',
                            description: "don't know"
                        },
                        {
                            name: 'Sub forumCtrl level 2',
                            description: "don't know"
                        }
                    ]
                },
                {
                    name: 'Sub blabaldmslfkjdsmlfjds forumCtrl level 1',
                    description: 'This can be tactics forumCtrl',
                    subForums: [
                        {
                            name: 'Sub forumCtrl level 2',
                            description: "don't know"
                        }
                    ]
                }
            ],
            threads: [
                {
                    title: 'Speeldag 1',
                    posts: [
                        {
                            creationDate: Date.parse("Mon, 25 Dec 1995 13:30:00 +0100"),
                            editDate: Date.now(),
                            author: 'joske',
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt purus hendrerit dapibus lobortis. Curabitur nec ante at urna volutpat dignissim molestie ultrices ' +
                            'diam. Maecenas urna dolor'
                        },
                        {
                            creationDate: Date.parse("Mon, 25 Dec 1999 13:30:00 +0100"),
                            editDate: Date.now(),
                            author: 'Janneke',
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt purus hendrerit dapibus lobortis. Curabitur nec ante at urna volutpat dignissim molestie ultrices ' +
                            'diam. Maecenas urna dolor'
                        },
                        {
                            creationDate: Date.parse("Mon, 25 Dec 1995 13:30:00 +0100"),
                            editDate: Date.now(),
                            author: 'Lukske',
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt purus hendrerit dapibus lobortis. Curabitur nec ante at urna volutpat dignissim molestie ultrices ' +
                            'diam. Maecenas urna dolor'
                        }
                    ]
                },
                {
                    title: 'Speeldag 2'
                }
            ]
        },
        {
            name: 'Tactic',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt purus hendrerit dapibus lobortis. Curabitur nec ante at urna volutpat dignissim molestie ultrices ' +
            'diam. Maecenas urna dolor, maximus non sollicitudin pharetra, fermentum vitae ex. Duis vitae laoreet lacus. Maecenas placerat viverra leo vel efficitur. Pellentesque tincidunt felis ' +
            'libero, congue luctus nulla accumsan id. Vivamus ut sem ac ipsum gravida egestas. Fusce mauris turpis, fermentum nec porta a, placerat at tortor. Vivamus id arcu ac ante vehicula ' +
            'tempor vitae et ligula. Nunc convallis ac neque sed pulvinar. Duis convallis consequat nisl eu congue. Suspendisse nec quam lobortis urna commodo pellentesque eu eget urna.'
        }

    ];

})();

