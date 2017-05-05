var projectControllers = angular.module('projectControllers', []);

projectControllers.controller('ListController', ['$scope', '$http', function ($scope, $http){
	$http.get('lib/projects.json').success(function(data){
		$scope.allProjects = data;
		$scope.projectOrder = 'pName';
	});	
}]);
projectControllers.controller('DetailController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams){
	$http.get('lib/projects.json').success(function(data){
		$scope.allProjects = data;
		$scope.whichProject = $routeParams.itemId;
	});	
}]);
	/*
	$scope.allProjects = [
	{
		"pName":"Quadruped - turtleBot",
		"tName":"turtleBot",
		"catagory":"Robots",
		"detail":"This is 3D printed project. Mainly designd for low cost purpose quadruped. Only 2 servos for each leg. No extra shield needed to manipulate servos."
	{
	},
		"pName":"Javy the fire truck",
		"tName":"Javy",
		"catagory":"vehicle",
		"detail":"The go cart type vehicle. Using two 12V scooter motors and radio control."
	},
	{
		"pName":"Quadruped - 9G3DOF II",
		"tName":"Quadruped3DOF",
		"catagory":"Robots",
		"detail":"A quadruped with 3 degree of freedom of each leg. The project has improved from previous design with less complex requirment of hardware and assembling."
	},
	{
		"pName":"Biped - Gorlien",
		"tName":"Gorlien",
		"catagory":"Robots",
		"detail":"Experiment design inspired from gorilla. The movement is a challenge to be programmed. Still in progress of programming."
	},
	{
		"pName":"Hexapod - SixEyes",
		"tName":"SixEyes",
		"catagory":"Robots",
		"detail":"2 degree of freedom of each leg. Controlled by smart phone with bluetooth."
	},
	{
		"pName":"Quadruped - Bider",
		"tName":"Bider",
		"catagory":"Robots",
		"detail":"The laser cutted chassis from MDF board. 3 degree of freedom of each leg. The chassis is base on the same design from the 3D printed <b>Quadruped - 9G3DOF</b>."
	},
	{
		"pName":"Quadruped - 9G3DOF",
		"tName":"Quadruped9G",
		"catagory":"Robots",
		"detail":"The quadruped project with 3 degree of freedom for each leg. Using Arduino as main core with servo shield to manipulate servos and power management."
	},
	{
		"pName":"Hexapod - 9G3DOF",
		"tName":"Hexapod9G",
		"catagory":"Robots",
		"detail":"The first design of 3D printed robot project back in 2012."
	},
	{
		"pName":"Lightsaber - Multicolor",
		"tName":"RGBsaber",
		"catagory":"Props",
		"detail":"Using 70~80 RGB leds in a string and use 3 transistors to control each color. Arduino Beetle and MP3 player board was used for all lighting and sound effects."
	},
	{
		"pName":"Lightsaber - Multicolor with gradient",
		"tName":"WS2812bSaber",
		"catagory":"Props",
		"detail":"2 WS2812B LED strips was used to replace the RGB LEDs. Saving lots of time on welding and wiring. The program is simple by using FastLED library for Arduino."
	}
]
*/