// primitive and non primitive
//primitive 7 types: String, null,undefined,number,symbol,Bigint
//non primitive/reference: array,objects,functions
const score=100
const dscore=100.3
let temp=30
let othercitytemp=45
let bb=null
let ss=Symbol('123')
let rr=Symbol('123')
console.log(ss===rr)
const bigNumber=2422162863788279297389272n
console.log(typeof bigNumber)
const heroes=["ayush","superman","batman"]
let myobj={name:"ayush",
    age:22
}
const myfunc=function(){
    console.log("Hello wORLD")
}
//_+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//MEMORY
//STACK(PRIMITIVE) AND HEAP(NON PRIMITIVE)
let myn="ayushdotcom"
let anothername=myn
anothername="chai"
console.log(myn)
console.log(anothername)
let userOne={name:"ayush",UPI:"user@ubi"}
let userTwo=userOne
userTwo.UPI="user@ybl"

console.log(userOne.UPI)
console.log(userTwo.UPI)
