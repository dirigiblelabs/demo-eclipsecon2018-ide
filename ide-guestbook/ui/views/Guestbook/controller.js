angular.module('page', ['ngAnimate', 'ui.bootstrap']);
angular.module('page')
.factory('$messageHub', [function() {

	var messageHub = new FramesMessageHub();

	return {
		onAddReview: function(callback) {
            messageHub.subscribe(callback, 'guestbook.addReview');
        }
	};
}])
.controller('PageController', function ($scope, $http, $messageHub) {

    $scope.reviews = [];

	$scope.getRating = function(stars) {
		return new Array(stars);
	};

	$messageHub.onAddReview(function(event) {
        $scope.reviews.unshift(event.data);
        $scope.$apply();
    });
});