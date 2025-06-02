const marvelheroes=["captainamerica","ironman","thor"]
const dcheroes=["batman","superman","flash"]
marvelheroes.push(dcheroes)
// console.log(marvelheroes)
// console.log(dcheroes)
// const herouniverse=marvelheroes.concat(dcheroes)//retuens new arr
// console.log(herouniverse)
const newheroes=[...marvelheroes,...dcheroes]
console.log(newheroes)