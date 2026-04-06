let src = {
    age: 23,
    name: "John",
    wt:63,
    ht : 5.8
};

let dest = {};


//coloning using iteration
for(let key in src){
    let newKey = key;
    let newValue = src[key];
    dest[newKey] = newValue;
}

src.name = "Bipro"

// let src2 = {
//     department: "CSE",
//     semister: 8,
// };
// console.log(obj);

// console.log(obj);

// let dest = {...src} //cloning
// let dest = Object.assign({},src); //same coloning
// let dest2 = Object.assign({},src,src2);

// src.name = "Bipro" 

console.log("src :", src);
console.log("dest :",dest);
// console.log("Combine colone :",dest2);
