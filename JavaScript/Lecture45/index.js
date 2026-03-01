

// sayMyname("Bipro")


// function sayMyname(finalName){
//     console.log(finalName)
// }


//when we create a function and and call it before it the function 
// go to the top of the scope
//it call function hoisting


//variable hoisting it shift he declaration to top of the scope but don't shift the value
// console.log(age);
// var age = 25;

//variable hosting is not working on let or const
// console.log(age);
// let age = 25;

//  class Humman{

//  }

//  const object1 = new Humman();

function greetMe(greet,fullName){
    console.log("Hello",fullName)
    greet()
}

function greet(){
    console.log("Greeting for the day")
}

greetMe(greet,"Bipro")