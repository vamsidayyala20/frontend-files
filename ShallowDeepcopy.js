// let arr=[1,2,4,5,3,[8,9],7]
// let copy=[...arr]
// console.log(copy)
// copy[5][0]=18
// console.log(copy)
// console.log(arr)
//deep copy
let arr1=[1,2,4,5,3,[8,9],7]
let copy1=structuredClone(arr1)
console.log(copy1)
copy1[5][0]=80
console.log(copy1)
console.log(arr1)

