//Create variables
	var test = 42;
	console.log(test);

// get the type of variable
	var test = 42;
	console.log(typeof test);

//creating objects and adding properties
//********* method1*************************
	var myObj = {};
	myObj.prop1 = "hello"
	myObj.prop2 = 123;
	console.log(myObj);  //-> Object { prop1: "hello", prop2: 123 }
//****************method2***********************
	var myObj = {
  		"prop1":"hello",
  		"prop2":123,
  		"prop3":true
		};
	console.log(myObj); //-> Object { prop1: "hello", prop2: 123, prop3: true }

//accessing the properties of objects
//******************method1****************
	console.log(myObj.prop1);
//******************method2****************
	console.log(myObj["prop1"]);

//dynamically set properties
	var myObj = {
  		"prop1":"hello",
  		"prop2":123,
  		"prop3":true
	};

	var test = "prop1"
	console.log(myObj[test]); //-> hello

//accessing arrays
	var myArray = [1,2,3];
	console.log(myArray[1]);

//creating functions
	function myFunction(name){
  		console.log("Hi " + name);
	}

	myFunction("Amali"); // -> Hi Amali

//creating functional expressions
	var f = function myFunc(){
  		console.log("hello");
	}

	f();	

//creating ananymous functions
	var f = function (){
  		console.log("hello");
	};

	f(); // -> hello

//function as argument
	var f = function (){
  		console.log("hello");
	};


	var exec = function(fn){
  		fn();
	};

	exec(f); // -> hello

//function as object property
	var myObj = {
  		"prpo1":true
	};

	myObj.prop2 = function (){
  		console.log("hello");
	};

	myObj.prop2();

//This keyword
	var person = {
  		"fName":"Amali",
  		"lname":"Osadi",
  		"getFullName": function (){
     		console.log(this.fName + " " + this.lname)
  		}
	};

	var f = person.getFullName();

//arguments keyword
	var add = function(){
  		var i, sum=0;
  		for(i=0;i<arguments.length;i++){
    		sum += arguments[i];
  		}
  		return sum
	};

	console.log(add(2,4,6,5)); // -> 17

//array methods
	var arr = [2,4,6,8,10];
	arr.push(12);
	arr.pop();
	arr.shift();
	arr.unshift("1bc");
	console.log(arr); // -> Array [ "1bc", 4, 6, 8, 10 ]

//foreach method
	var arr = [2,4,6,8,10];
	var fun = function(item){
  		console.log("Item is" + item);
	};

	arr.forEach(fun);












