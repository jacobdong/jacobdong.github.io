angular.module('NgSwitcherySample', [])
	.controller('NgSwitcheryCtrl', ['$scope',
		function($scope) {
			$scope.active = true;
			$scope.program = false;
			$scope.switcheryDisabled = true;
		}
	]);