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






