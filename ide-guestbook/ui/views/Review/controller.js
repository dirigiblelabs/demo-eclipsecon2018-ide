angular.module('page', ['ngAnimate', 'ui.bootstrap']);
angular.module('page')
.factory('$messageHub', [function() {
	var messageHub = new FramesMessageHub();

	return {
		messageAddReview: function(review) {
			messageHub.post({data: review}, 'guestbook.addReview');
		}
	};
}])
.controller('PageController', function ($scope, $http, $messageHub) {

	$http.get('/services/v3/js/ide-core/services/user-name.js')
	.success(function(data) {
		$scope.user = data.trim();
	});

	$scope.addReview = function() {
		var review = {
			'text': $scope.review,
			'user': $scope.user,
			'date': new Date()
		};
		$messageHub.messageAddReview(review);
		$scope.review = null;
	};
});