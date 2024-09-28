// var marks = Array(6)
// var marks = new Array(20,40,34,12,36,33)
// console.log(marks)

// var marks = [20,40,35,12,37,100]
// console.log(marks[2]) //35

// var marks = [3,4,5,6,77]
// console.log(marks)
// marks[1] = 33
// console.log(marks)

// console.log(marks.length);

// marks.push(65)
// console.log(marks);

// marks.pop()
// console.log(marks)

// marks.unshift(12)
// console.log(marks)

// console.log(marks.indexOf(33))

// console.log(marks.includes(3))
// console.log(marks.includes(34))
 
// console.log(marks.slice(2,4))
// var sum = 0
// for(let i=0; i < marks.length; i++){
//     console.log(marks[i])
//     sum = sum + marks[i]
// }
// console.log(sum)

// //reduce filter map

// let total = marks.reduce((sum,mark)=>sum+mark,0)
// console.log(total)



//numere pare din array
var evenScores=[]
var scores = [12,13,14,16]
for(i=0; i<scores.length; i++){
    if(scores[i] % 2==0){
        evenScores.push(scores[i]);
    }
}
console.log(evenScores)

let newFilterEvenScores = scores.filter(scores=>scores%2==0)
console.log(newFilterEvenScores)


//map
//create new arra with even numbers and multiply with 3

let mappedArray = newFilterEvenScores.map(score=>score*3)
console.log(mappedArray)

summapp=0
for(i=0;i<mappedArray.length; i++){
    summapp = summapp + mappedArray[i]
}
console.log(summapp)


//sort strings
var fruits = ["banana", "mango", "pomegrate","apple"]
fruits.sort()
console.log(fruits)


//sort numbers
var scores1=[12,003,19,16,14]

console.log(scores1.sort())

scores1.sort(function(a,b){
    return a-b
})
console.log(scores1.sort((a,b)=> a-b))

console.log(scores1.reverse())
