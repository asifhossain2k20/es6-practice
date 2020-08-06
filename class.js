class Student{
    constructor(sId,sName){
        this.id=sId;
        this.name=sName;
        this.school="X school";
    }
}

const Student1=new Student(10,"Asif");
const Student2=new Student(10,"alif");
console.log(Student1,Student2);