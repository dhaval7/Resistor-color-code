
var myApp = angular.module('myApp', []);

myApp.controller('ListController', function ($scope) {
	var a, b, c, d;
  var coding = { "Black" : {
	                        "Significant" : 0,
							"Multiplier" : 0,
							"Tolerance": 0
							},
				 "Brown" : {
	                        "Significant" : 1,
							"Multiplier" : 1,
							"Tolerance": 1
							},
				"Red" : {
	                        "Significant" : 2,
							"Multiplier" : 2,
							"Tolerance": 2
							},
				"Orange" : {
	                        "Significant" : 3,
							"Multiplier" : 3,
							"Tolerance": 0
							},
				"Yellow" : {
	                        "Significant" : 4,
							"Multiplier" : 4,
							"Tolerance": 5
							},
				"Green" : {
	                        "Significant" : 5,
							"Multiplier" : 5,
							"Tolerance": 0.5
							},
				"Blue" : {
	                        "Significant" : 6,
							"Multiplier" : 6,
							"Tolerance": 0.25
							},
				"Violet" : {
	                        "Significant" : 7,
							"Multiplier" : 7,
							"Tolerance": 0.1
							},
				"Grey" : {
	                        "Significant" : 8,
							"Multiplier" : 8,
							"Tolerance": 0.05
							},
				"White" : {
	                        "Significant" : 9,
							"Multiplier" : 9,
							"Tolerance": 0
							},
				"Gold" : {
	                        "Significant" : 0,
							"Multiplier" : -1,
							"Tolerance": 5
							},
				"Silver" : {
	                        "Significant" : 0,
							"Multiplier" : -2,
							"Tolerance": 10
							}
							
               }
   $scope.coding = coding;
   
   $scope.setFirst = function(e){
	   a = this.value;
	  console.log(a);
   }
   
    $scope.setSecond = function(e){
	   b = this.value;
	  console.log(b);
   }
   
    $scope.setThird = function(e){
	   c = this.value;
	  console.log(c);
   }
   
   $scope.setForth = function(e){
	   d = this.value;
	  console.log(d);
   }
  $scope.Display = function(){
	  
	  var ohmValue = (""+a+b)*Math.pow(10,c);
	  var ohmValueNum = Number(ohmValue);
	  var upperLimit = ohmValueNum *(1+(d/100));
	  var lowerLimit = ohmValueNum *(1-(d/100));
	  
	  var FinalupperLimit = upperLimit.toFixed(2);
      var FinallowerLimit = lowerLimit.toFixed(2);
	  
	  $scope.FinallowerLimit = FinallowerLimit;
	  $scope.FinalloupperLimit = FinalupperLimit;
	  console.log(ohmValueNum);
	  console.log(FinallowerLimit);
	  console.log(FinalupperLimit);
	  
  }
  
});

