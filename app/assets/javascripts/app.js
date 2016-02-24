var flapperNews = angular.module("flapperNews", ['ui.router', 'templates']);

flapperNews.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
  $stateProvider.state('home',{
    url: '/home',
    templateUrl: 'home/_home.html',
    controller: 'MainCtrl',
    resolve: {
        postPromise: ['posts', function(posts){
          return posts.getAll();
        }]
      }
  }).state('posts', {
    url: '/posts/{id}',
    templateUrl: 'posts/_posts.html',
    controller: 'PostsCtrl',
    resolve: {
      post: ['$stateParams', 'posts', function($stateParams, posts) {
        return posts.getOne($stateParams.id);
  }]
}
  });
  $urlRouterProvider.otherwise("home");
  $locationProvider.html5Mode(true);
}]);

