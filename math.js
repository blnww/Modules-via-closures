// ;(function() {
// 	function avg1(arr) {
// 		return sum(arr, 1) / arr.length;
// 	}
	
// 	function avg2(arr) {
// 		return sum(arr, 2) / arr.length;
// 	}
	
// 	function avg3(arr) {
// 		return sum(arr, 3) / arr.length;
// 	}
	
// 	// вспомогательная функция
// 	function sum(arr, pow) {
// 		let res = 0;
		
// 		for (let elem of arr) {
// 			res += elem ** pow;
// 		}
		
// 		return res;
// 	}
	
// 	window.math = {avg1, avg2, avg3};
// })();


// ;(function() {
// 	function map1 (arr){ 
// 		return a(arr) * 3; 
// 	}
// 	function every2(arr) { 
// 		return arr % 2 == 0; 
// 	}
	
// 	function contains3(arr) { 
// 		return arr.includes(3)
// 	}
// 	function min4() { 
// 		let a = [1,2,3]
// 		let b = Math.min.apply(null,a)
// 		return b
// 	}

// 	function min4() { 
// 		let a = [1,2,3]
// 		let b = Math.min.apply(null,a)
// 		return b
// 	}
// 	function max5 () { 
// 		let a = [1,2,3]
// 		let b = Math.max.apply(null,a)
// 		return b
// 	}
	
// 	function a(arr) {
// 		let res = 0;
		
// 		for (let elem of arr) {
// 			res += elem ;
// 		}
		
// 		return res;
// 	}
	
	
	
// 	window.math = {map1,every2,contains3,min4,max5};
// })();















// ;(function() {
// function map1() {
//     let a = [1, 2, 3];
//     let b = _.map(a, function(elem) {
//             return elem * 2;
//     });
//     return b
// }
// function filter2(){ 
//     let a = [1, 2, 3, 4, 5, 6,7,8]
//     let b =_.filter(a, function(num){
//         return num % 2 == 0;
//     });
//     return b
//  }
//  function find3(){ 
//     let a = [1, 2, 3, 4, 5, 6]
//     let b =_.find(a, function(num){
//         return num % 2 == 0;
//     });
//     return b
//  }
//  function pluck4(){ 
//     let a  = [{name: 'Nikita', age: 17}, {name: 'Artem', age: 16}, {name: 'Danya', age: 15}];
//     let b =_.pluck(a, 'name');
//     return b
//  }
//  function max5(){ 
//     let a  = [{name: 'Nikita', age: 17}, {name: 'Artem', age: 16}, {name: 'Danya', age: 15}];
//     let b =_.max(a, function(a){
//         return a.age
//     });
//     return b
//  }
// window.math = {map1,filter2,find3,pluck4,max5}
// })();