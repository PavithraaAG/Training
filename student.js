var studentDB=[]
function addstudent(name,email,phone,age,regid)
{
   var student={ name,
    email,
    phone,
    age,
    regid,
};
studentDB.push(student);
}
addstudent('john',"john@gmail.com",1994446667,20,"REG9205");
addstudent('jeoo',"jeoo@gmail.com",1994446663,20,"REG9206");
addstudent('leo',"leo@gmail.com",1994446669,40,"REG9207");
addstudent('raja',"raja@gmail.com",1994446664,50,"REG9208");
addstudent('princy',"princy@gmail.com",1994446663,60,"REG9209");
addstudent('priya',"priya@gmail.com",1994446662,50,"REG9201");
addstudent('kavya',"kavya@gmail.com",1994446668,30,"REG9202");
addstudent('sreeya',"sreeya@gmail.com",1994446661,22,"REG9203");
addstudent('rosy',"rosy@gmail.com",1994446634,25,"REG9204");
addstudent('sreeya',"sreeya@gmail.com",1994446655,29,"REG9211");

/*     UPPERCASE    */
var uppername=studentDB.map(function(student){
    return student.name.toUpperCase();
});
console.log(uppername);

/*     forEach student email check    */
var checkemail=studentDB.every(function(student){
    return student.email!==undefined;
});
console.log(checkemail)  

//total num of student
var totalstu=studentDB.reduce(function(arr){
    return arr+1;
},0);
console.log(totalstu);

//filter
var filterstu=studentDB.filter(function(student){
    return student.regid.startWith("REG92");
});
console.log("Filtered student :");
console.log(filterstu);

