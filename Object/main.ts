///...... SIMPLE OBJECT.....////

let user_Name ={
    fname: "ghazala",
    lname: "siddiqui",
    age:  34,
    hobbies:["gaming","football","swimming"],
    salary:() => 20000,
    email: "abc@hotmail.com",
    office:{
        address:"clifton karachi",
        Name: "brand bucket"
    }
          
}

console.log(user_Name)
console.log(user_Name.salary())

// syntex ///
//interface obj {}


interface objtype {
    fname: string,
    classid: number,
    rollno:number,
    student:boolean,
    email:string,
    subject:string[],
    address:object
    

}

let obj:objtype = {
    fname:"ghazal siddiqui",
    classid: 123,
    rollno: 11,
    student:true,
    email:"abc@hotmail.com",
    subject:["math","english","urdu"],
    address: {
        area:"clifton",
        flat: 607
}

}

console.log(obj.address.area)
console.log(obj.subject[0])


//// syntex ////
////type obj={}


type usertype={
    name:string,
    age: number,
    func:()=>{},
    email: string,
    hobby :string [],
    address:number
    office:object
}  

    let objtype={
    name:"hina",
    age: 34,
    greet:()=>{
    console.log("hello")
    },
    email:"hotmail.com",
    hobby:["hocky","ludo","gamming"],
    address: 607,
    office :{
        name: "jeena",
        id: 24
 }
    
}
 
 console.log(objtype)
 console.log(objtype.office.id)
 console.log(objtype.greet())
 console.log("email"in objtype)



