//spread operator: this is used to expand array or object ito individual elements
//symbol: ...

let numbers=[3,2,5,7,5]
console.log("numbers: ",numbers)
console.log("spreaded numbers: ",...numbers)

// merging two arrays
let arr1=[56,234,456,34576,2345]
let arr2=[5,43,523,41,4,7,235,457,8,2345]

//merginf two arrays
let mergedArray=[45,...arr1,90,...arr2,20]
console.log("merged array: ",mergedArray)

//spread in object
let obj1={
    fullName:"ram nepali",age:34,address:"ktm"
}
let obj2={
    ...obj1,contact:9598753457,postalcode:234323,
}
console.log("obj1: ",obj1)
console.log("obj2: ",obj2)