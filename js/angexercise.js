var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope){


	$scope.countries = [
		{
			name:'United States',
			population: 318000000,
			leader: "President Obama",
			src: "img/usa_converted.png"
		},
		{
			name: "China",
			population: 1300000000,
			leader: "Xi Jinping",
			src: "img/china_converted.png"
		},
		{
			name: "India",
			population: 1200000000,
			leader: "Pranab Mukherjee",
			src: "img/india_converted.png"
		},
		{
			name:'Japan',
			population: 127000000,
			leader: "Prime Minister Shinzo Abe",
			src: "img/japan_converted.png"
		},
		{
			name: "England",
			population: 53000000,
			leader: "David Cameron",
			src: "img/england_converted.png"
		},
		{
			name: "Germany",
			population: 80000000,
			leader: "Joachim Gauck",
			src: "img/germany_converted.png"
		},
			{
			name:'France',
			population: 66000000,
			leader: "Francois Hollande",
			src: "img/france_converted.png"
		},
		{
			name: "Mexico",
			population: 2200000,
			leader: "President Enrique Pena Nieto",
			src: "img/mexico_converted.png"
		},
		{
			name: "Canada",
			population: 35000000,
			leader: "Prime Minister Trudeau",
			src: "img/canada_converted.png"
		},
		{
			name:'South Korea',
			population: 50000000,
			leader: "President Park Geun-hye",
			src: "img/korea_converted.png"
		},



	];

	$scope.addCountry = function(){
		$scope.countries.push({
			name: $scope.newCountry,
			population: $scope.newPop,
			leader: $scope.newLeader,
			src: "img/placeholder_converted.png"
		});
		$scope.newCountry = '';
		$scope.newPop = '';
		$scope.newLeader = '';


	}

	$scope.removeCountry = function(i){
		$scope.countries.splice(i,1);
		
	}

});