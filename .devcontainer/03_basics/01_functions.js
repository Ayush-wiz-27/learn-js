function SaymyName(name){
    console.log(`hello ${name}`)
}
SaymyName('ayush')
function add(num1,num2){
    return num1+num2;
}
let result=add(2,3)
console.log(result);
function login(username){
    console.log(`${username} just logged in`)
}
function prices(val1,val2, ...prices){

    return prices
}
// console.log(prices(200,10,199));
let user={
    name:"ayush",
    age:19
}
// function myfunc(anyobj){
//     console.log(`${anyobj.name} is ${anyobj.age} years old`)
// }
// myfunc(user)
const arr=[200,20,600,60,7];
function elac(anyarr){

    return anyarr[1];

}
console.log(`second elemt in array is ${elac(arr)}`)