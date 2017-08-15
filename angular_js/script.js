var app=angular.module("Demo",["ngRoute"]);
	app.config(function($routeProvider){
	$routeProvider
		.when("/home",{
		templateUrl:"templates/home.html",
		controller:"homeController"
		})
		.when("/courses",{
		templateUrl:"templates/courses.html",
		controller:"coursesController"
		})
		.when("/students",{
		templateUrl:"templates/students.html",
		controller:"studentsController"
		})
		
		});
		app.controller("homeController",function($scope){
		    $scope.message="Home Page";
			})
		app.controller("coursesController",function($scope){
			$scope.courses=["c","c#","javascript","jquery","angularjs"];
			})
		app.controller("studentsController",function($scope){
			$scope.students={sno:1,sname:"scott",course="java"}
								
								});
		