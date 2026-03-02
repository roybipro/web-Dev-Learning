


function getAge(){
    return 19
}

function utility(name = "Bipro", age = getAge()){
    console.log(name,age);
}

utility();

// function sayName(fName = "Enter fast Name",lName = "Enter Last name"){
//     console.log("Myname is :", fName,lName);
// }
// sayName("Bipro","Roy");







// class Human {

//     //properties
//     age = 23;
//     #wt = 65;   // private can be define by useing #
//     ht = 180;

//     constructor(newAge,newHeight,newWaight){
//         this.age = newAge;
//         this.ht = newHeight;
//         this.#wt = newWaight;
//     }

//     //behaviour
//     walking(){
//         console.log("I am Walking" ,this.#wt);
//     }
//     running(){
//         console.log("I am Running");
//     }

//     get fetchWeight(){
//         return this.#wt;
//     }

//     set modifyWaight(val){
//         this.#wt = val;
//     }

// }


// let obj = new Human(50,190,80);

// // console.log(obj.#wt);
// obj.walking();
// console.log(obj.ht);
// console.log(obj.fetchWeight);