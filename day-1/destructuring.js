// destructuring: extracting data from array or object

//destructuring arrat:
let arr=["home","work","school","office"]
let [a,b,c,d,e]=arr
console.log(a,b,c,d,e)

//object (key:value pair)
let myObj={
    fullName:"ram singh",
    age:23,address:"nepal",gender:"male",
}

// destructuring object
let{age,gender,fullName}=myObj
console.log(age,gender,fullName)