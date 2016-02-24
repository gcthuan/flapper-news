flapperNews.controller('MainCtrl', ['$scope', 'posts', function($scope, posts) {
  $scope.posts = posts.posts;
  $scope.addPost = function() {
    if(!$scope.title || $scope.title === '') {
      return;
    }
    posts.create({
      title: $scope.title,
    });
    $scope.title = '';

  };
  $scope.upVote = function(post) {
    posts.upVote(post);
  };
  $scope.downVote = function(post) {
    posts.downVote(post);
  };
}]);