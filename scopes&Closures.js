//scope doesn't create with curly braces
	var name = "Amali";

	if(name === "Amali"){
  		var dep = "Eng";
	}

	console.log(name); //-> Amali 
	console.log(dep); //->Eng 

//scopes is created with functions
	var name = "Amali";

	function depName(){
  		if(name === "Amali"){
  			var dep = "Eng";
  		}
	}

	console.log(name); //-> Amali
	console.log(dep);	// -> run time error (dep is not defined)

// IIFE : Immediately Invoke Function Expressions
	(function addNum(){
  		var a = 10;
  		var b = 5;
  		console.log(a+b);
	})(); // -> 15
 
 
//global scope problem
	var a = 100;

	function myFunc(){
  		var b = 200;
  		console.log(b);
  		c = 50; // c is store under global scope, not under myFunc scope
		}

	myFunc();

//hoisting
	console.log(a); // -> undefined (doesn't throw an error) bacause variable is crated under global varibale in the compilation step
	var a = 20;


//closure
	var a = 20;

	function outer(){
  		var b = 30;
  		var inner =  function(){
    		console.log(a);
    		console.log(b);
  		};
  		return inner;
	}

	var check = outer();
	check(); // 20 30  -> inner function is excute out of scope. but it will produce the result

// copy of variable inside the function
	var a = 20;

	function outer(){
  		var b = 30;
  		var inner =  function(){
    		a++;
    		b++;
    		console.log(a);
    		console.log(b);
  		};
  		return inner;
	}

	var check = outer();
	check(); // -> 21, 31 (new copy of a and b are produced)

	var check1 = outer();
	check1(); // -> 22,31 (only new copy of b is produced)

// callback
	var a = 20;

	function login(){
  		console.log(a);
	}

	setTimeout(login,1000); // -> 20 is printed after 1000ms

//private variables and public methods
	function createPerson(){
  	var fName = "Amali";
  	var lName = "Osadi";
   
  	var returnObj = {
    	"getFName" : function(){
    		return fName;
  		},
    	"getLName" : function(){
      		return lName;
    	}
   	};
  	return returnObj;
  
	}

	var person = createPerson();

	console.log(person.fName); // -> undefined
	console.log(person.getFName()); // -> Amali

// asynchronous call (wrong method)
	var i;

	var print = function(){
  		console.log(i);
	}

	for(i=0; i<10; i++){
  		setTimeout(print,1);  // -> print 10 in ten times
	}

// asynchronous call (right method)
	var i;

	for(i=0; i<10; i++){
  		(function(curVal){
    		setTimeout(function(){
      			console.log(curVal);
    		},1000)
  		})(i);
	} // -> print 0 to 9 after waiting 1000 ms



