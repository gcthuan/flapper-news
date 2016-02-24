flapperNews.factory('posts', ['$http', function($http) {
  var obj = { posts: [] };
  obj.post = {};
  obj.getAll = function() {
    return $http.get('/posts.json').success(function(data){
      angular.copy(data, obj.posts);
    });
  };
  obj.getOne = function(postId) {
    return $http.get('/posts/' + postId + '.json').then(function(response) {
      return response.data;
    });
  };
  obj.create = function(post) {
    return $http.post('/posts.json', post).success(function(data) {
      obj.posts.push(data);
    });
  };
  obj.upVote = function(post) {
  	return $http.put('/posts/' + post.id + '/upvote.json').success(function(data) {
  		post.upvotes += 1;
  	});
  };
  obj.downVote = function(post) {
  	return $http.put('/posts/' + post.id + '/downvote.json').success(function(data) {
  		post.upvotes -= 1;
  	});
  };
  obj.addComment = function(postId, comment) {
    return $http.post('/posts/' + postId + '/comments.json', comment);
  };
  obj.upvoteComment = function(post, comment) {
    return $http.put('/posts/' + post.id + '/comments/' + comment.id + '/upvote.json').success(function(data) {
      comment.upvotes += 1;
    });
  };
  obj.downvoteComment = function(post, comment) {
    return $http.put('/posts/' + post.id + '/comments/' + comment.id + '/downvote.json').success(function(data) {
      comment.upvotes -= 1;
    });
  };
  return obj;
}]);
