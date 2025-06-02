const mysym=Symbol('mykey1')
const userJs={name:"Hotesh",
    "full name":"Hitesaa chaudhary",
    age:18,
    [mysym]:"mykey1",
    location:"jaipur",
    email:"histeshaaaaaa.com",
    isLoggedin:false,
    lastLoginDays:["Monday","Saturday"]

}
console.log(userJs.age)//not good practice
console.log(userJs["email"])
// console.log(userJs.full name)
console.log(userJs["full name"])
console.log(userJs[mysym])
userJs.email="chatgpt.commmmaaa"
// Object.freeze(userJs)
userJs.email="jisteshaaaaaaidli"
console.log(userJs)
userJs.greeting=function(){
    console.log("Hello molojolo")
};
userJs.greeting2=function(){
    console.log(`hello luv you ${this["full name"]}`)
}
console.log(userJs.greeting());
console.log(userJs.greeting2());
