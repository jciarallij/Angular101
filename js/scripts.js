// --------------------- Javascript Way Plain Vanilla ------------------------
// Vanilla Javascript way

// var myInput = document.getElementById('myInput');

// myInput.addEventListener('keyup', function(){
// 	// console.log('User hit a key!');
// 	var userText = myInput.value;
// 	document.getElementById('inputText').innerHTML = userText
// })
// --------------------- Jquery Way ------------------------
// Jquery Way

// $('#myInput').keyup(function(){
//  $('#inputText').html($('#myInput').val());
// })

// --------------------- Angular Exercise ------------------------
var myApp = angular.module('myApp', []);
// console.log(myApp)
myApp.controller('myController', function($scope){


	$scope.cities = [
		{
			name:'Atlanta',
			population: 500000
		},
		{
			name: "Houston",
			population: 2200000
		},
		{
			name: "Portland",
			population: 610000
		}



	];
	// $scope.first = "Joshua";
	// $scope.last = "Ciaralli";
	// $scope.address = "11104 River Ridge Drive";
	// $scope.city = "Canton";
	// $scope.state = "Georgia";
	// $scope.zip = 30114;

	$scope.dcClass = [
		// {
		// 	name:'Tristan',
		// 	desc: 'Stock guy',
		// 	luckyNumber: 12
		// },
		// {
		// 	name:'Josh',
		// 	desc:'Designer',
		// 	luckyNumber: 7
		// },	
		'Tristan',
		'Josh',
		'Bogdan',
		'Lazlo',
		'Keith',
		'Will',
		'Curtis',
		'Joe',
		'Kochan',
		'Patrick',
		'Jonathan',
		'Jeremy'


	];

	$scope.addStudent = function(){
		$scope.dcClass.push($scope.newStudent);
		$scope.newStudent = '';

	}

	$scope.removeStudent = function(i){
		$scope.dcClass.splice(i,1);
		// console.log(i);
	}

});


		// for(i=0; i < $scope.dcClass.length; i++){      /// One way to remove from data from an array
		// 	if (student == $scope.dcClass[i]){
		// 		$scope.dcClass.splice(i, 1);
				// console.log(student);
		// 	}
		// }