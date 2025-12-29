//rest operator: this is used to collect mutiple arguments into an array
//symbol: ...

//function without rest operator
 let add=(a,b,c,d,e,f,g,h,i,j,k)=>{
    let res=a+b+c+d+e+f+g+h+i+j+k
    console.log("add result:", res)

}

//calling function
add(1,2,3,4,5,6,7,8,10,11,12)

//functionusing rest

let addUsingRest=(...values)=>{
    let sum=0
    for (let i=0;i<values.length;i++){
        sum+=values[i]
    }
    console.log("sum: ",sum)
}
addUsingRest(1,2,3,4,435,124,3213,43,4,234,34,234)