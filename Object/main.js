///...... SIMPLE OBJECT.....////
var user_Name = {
    fname: "ghazala",
    lname: "siddiqui",
    age: 34,
    hobbies: ["gaming", "football", "swimming"],
    salary: function () { return 20000; },
    email: "abc@hotmail.com",
    office: {
        address: "clifton karachi",
        Name: "brand bucket"
    }
};
console.log(user_Name);
console.log(user_Name.salary());
var obj = {
    fname: "ghazal siddiqui",
    classid: 123,
    rollno: 11,
    student: true,
    email: "abc@hotmail.com",
    subject: ["math", "english", "urdu"],
    address: {
        area: "clifton",
        flat: 607
    }
};
console.log(obj);
console.log(obj.subject[0]);
var objtype = {
    name: "hina",
    age: 34,
    greet: function () {
        console.log("hello");
    },
    email: "hotmail.com",
    hobby: ["hocky", "ludo", "gamming"],
    address: 607,
    office: {
        name: "jeena",
        id: 24
    }
};
console.log(objtype);
console.log(objtype.office.id);
console.log(objtype.greet());
console.log("email" in objtype);
