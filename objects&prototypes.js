//create objects using functions
	function createPer(fName,lName){
  		var person = {};
  		person.fName = fName;
  		person.lName = lName;
  		return person;
	}

	var p = createPer("Amali","Osadi");
	console.log(p); // -> Object { fName: "Amali", lName: "Osadi" }  

// create object using constructor
	function createPer(fName,lName){
  		this.fName = fName;
  		this.lName = lName;
	}

	var p = new createPer("Amali","Osadi");
	console.log(p); // -> Object { fName: "Amali", lName: "Osadi" }  
	
//this reference
	function Person(fname,lname,age){
  		this.fname = fname;
  		this.lname = lname;
  		this.age = age;
  		this.addAge = function(){
    		this.age +=3;
  		}
	}

	var p1 = new Person("Amali","Osadi",25);
	p1.addAge();

	console.log(p1);

//call function
	function Person(fname,lname,age){
  		this.fname = fname;
  		this.lname = lname;
  		this.age = age;
  		this.addAge = function(){
    		this.age +=3;
  		}
	}

	var p1 = new Person("Amali","Osadi",25);
	p1.addAge();

	var mike = {
  		"name":"ama"
	};

	mike.addAg= p1.addAge;
	mike.addAg.call(p1);
	console.log(mike);
	console.log(p1);

//prototype
	function foo(){
  
	}
	var newObj = new foo();

	foo.prototype.test = "testing"

	console.log(foo.prototype); // -> Object { test: "testing", 1 more… }
	console.log(newObj.__proto__); // -> Object { test: "testing", 1 more… }
	console.log(foo.prototype.test); // -> testing
	console.log(newObj.__proto__.test); // -> testing



