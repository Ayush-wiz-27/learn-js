const myarr=[1,2,3,4,5,"hello"]
const myheroes=["shaktiman","spiderman","superman"]
const myarr2=new Array(1,2,5,6,8)
console.log(myarr2[0])
//array methods
// myarr.push(6)
// // myarr.unshift(9)

// // myarr.pop()
// myarr.shift()
console.log(myarr)
const newarr=myarr.join() //string convert
console.log(myarr)
console.log(typeof newarr)
console.log(newarr)
const finalarr=new Array(1,2,3,4,5)
console.log("A",finalarr)
const myn1=finalarr.slice(1,3)
console.log(myn1)
console.log("B",finalarr)
const myn2=finalarr.splice(1,3)
console.log(myn2)
console.log("C",finalarr)