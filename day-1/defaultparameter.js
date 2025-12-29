let add= (a,b)=>{
    const result=a+b
    console.log("add result:",result)
}

//calling function with arguments
add(35,78)
add(35)
add()
//function with default parameters

let sub=(a=10,b=7)=>{
    const result=a-b
    console.log("subtract result: ",result)
}

sub(20,7)
sub(7)
sub()

