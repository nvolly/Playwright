//string
let day = 'tuesday '
console.log(day.length)

//substring
console.log(day.slice(0,4)) //tues

console.log(day[1]) //u

//tue day
let splitday = day.split("s")
console.log(splitday)
console.log(splitday[0].length)
console.log(splitday[0].trim().length)

//split imparte stringul la valoarea sau indexul
//trim scoate spaceurile goale
//slice taie de la un index la altul [0,4]

let date = '27' 
let nextdate = '23'
let diff = parseInt(nextdate) - parseInt(date)
console.log(diff)

// // //parseINT - convert int