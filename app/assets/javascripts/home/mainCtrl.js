flapperNews.controller('MainCtrl', ['$scope', 'posts', function($scope, posts) {
  $scope.posts = posts.posts;
  $scope.addPost = function() {
    $scope.posts.push({title: $scope.title, upvotes: 0, comments: [
        {author: 'Joe', body: 'Cool post!', upvotes: 0},
        {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}]
      });
    $scope.title = '';

  };
  $scope.upVote = function(post) {
    post.upvotes += 1;
  };
  $scope.downVote = function(post) {
    post.upvotes -= 1;
  };
}]);