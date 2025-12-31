let myobj={
    fullname:"Ram Nepali",
    age:40,
    address:"KTM",
    gender:"Male",
    displayfullname: function(){
        console.log("display full name function called")
        console.log("fullname: ",this.fullname)
    },
}

//calling displayfullname functions
myobj.displayfullname()

// id displayfullname function is assigne to new variable then this is lost
let tempFunc=myobj.displayfullname
tempFunc()

//solution to preserve the this keyword
let tempfunc2=myobj.displayfullname.bind(myobj)
tempfunc2()