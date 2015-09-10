(function(){
    var app = angular.module('visboys-forum', []);
    // 2 phases when a module gets created:
    // config phase

    // run phase
    app.run(function ($rootScope) {
        $rootScope.name = "testing rootScope in this module";
    });


    //app.controller('ForumController',[ '$http', '$log', function($http, $log, $scope) {
    app.controller('ForumController',['$log', function($log) {
        this.currentThread;
        this.forums = myForums;
        // use $http angular built in service:
        //var forum = this;
        //forum.forums = []; // initialize because the http get request can take a while, no error like this
        //$http.get('/forums.json', {loggedInUser: 'TODO'}).success(function (data) {
        //    forum.forums = data;
        //});
        // or other syntax:
        //$http({method: 'OPTIONS', url: '/path/to/resource.json'});
        //$http({method: 'TRACE', url: '/path/to/resource.json'});


        this.selectThread = function(selectedThread) {
            $log.debug('testing selectThread');
            this.currentThread = selectedThread;
        };
        this.isSelected = function (checkThread) {
            return this.currentThread === checkThread;
        };
    } ]);

    app.controller('PostController', function () {
        this.post = {};

        this.addPost = function (currentThread) {
            this.post.creationDate = Date.now();
            if (!currentThread.posts)
                currentThread.posts = [];
            currentThread.posts.push(this.post);
            this.post = {
                author: '',
                text: ''
            };
        };
    });







    ///////////////////////
    // Custom Directives //
    ///////////////////////

    // a directive gets by default executed in the current (outer) scope
    app.directive('post', function () {
        return {
            // Directive definition object
            restrict: 'E',  // E = Element html
            templateUrl: 'customDirectives/post.html'
            ,
            scope: {
                post: '='  // attribute post double binded    '=' : double binding for objects, ...
                // '@' // : top down : for strings in your directive with @
                // '&' // : bottom up: for functions
            }
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

