flapperNews.controller('PostsCtrl', ['$scope', 'posts', 'post', '$stateParams', '$http', function($scope, posts, post, $stateParams, $http) {
  // get data of the post with corresponding id
  $scope.post = post;
  $scope.addComment = function() {
    if ($scope.body === '') {return;}
    posts.addComment(post.id, {
      author: 'user',
      body: $scope.body,
    }).success(function(data) {
      $scope.post.comments.push(data);
    });
    $scope.body = '';
  };


  $scope.upVote = function(comment) {
    posts.upvoteComment(post, comment);
  };
  $scope.downVote = function(comment) {
    posts.downvoteComment(post, comment);
  };

}]);