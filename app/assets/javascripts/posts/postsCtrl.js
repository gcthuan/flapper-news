flapperNews.controller('PostsCtrl', ['$scope', 'posts', '$stateParams', function($scope, posts, $stateParams) {
  $scope.post = posts.posts[$stateParams.id];
  $scope.addComment = function() {
    if ($scope.body === '') {return;}
    $scope.post.comments.push({author: 'user', body: $scope.body, upvotes: 0});
    $scope.body = '';
  };
  
  $scope.upVote = function(comment) {
    comment.upvotes += 1;
  };
  $scope.downVote = function(comment) {
    comment.upvotes -= 1;
  };

}]);