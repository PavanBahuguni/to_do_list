var todoMean = angular.module('todoMean',[]);

function appController($scope, $http){
	$scope.formData={};
	
	$http.get('/rest/tasks').success(function(data){
		$scope.tasks = data;
		console.log("taks list recieved:", data);
	}).error(function(data){
		console.log("Error"+data);
	});
	
	$scope.createTask = function(){
		$http.post('/rest/tasks', $scope.formData)
			.success(function(data){
				$scope.tasks=data;
				$scope.formData={};
				console.log("new task succesfully added!");
			}).error(function(data){
				console.log("Error", data);
			});
	};
	
	$scope.deleteTasks = function(id){
		$http.delete('/rest/task/'+id)
			.success(function(data){
				$scope.tasks=data;
				console.log("Task successfully deleted!");
			})
			.error(function(data){
				console.log("Error", data);
			});
	}
	
}