function Student(name, former){
	this.name = name;
    this.former = former;
}

var items = [];
	items.push(new Student("Tristan","Stocks"));
	items.push(new Student("Josh","IT Manager"));
	items.push(new Student("Bogdan","Mechanic"));
	items.push(new Student("Lazlo","KGB"));
	items.push(new Student("Keith","Geologist"));
	items.push(new Student("Will","Skiing Ninja"));
	items.push(new Student("Curtis","IT Master"));
	items.push(new Student("Joe","The Controller"));
	items.push(new Student("Koshan","Demon Deacon"));
	items.push(new Student("Patrick","Outlaw"));
	items.push(new Student("Jonathan","Boring Linguist"));
	items.push(new Student("Jeremy","Magnum PI"));
	// console.log(items);

var angularStyle = angular.module('angularStyle', []);
angularStyle.controller('styleController', function($scope){

	$scope.myColor = "purple";

	$scope.items = items;

	$scope.understand = function(){
		$scope.understandYes = 1;
	}


});