class Parent{
    constructor(){
        this.fatherName="Ali Hossain";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name=name;
    }
    getFullName(){
        return this.fatherName+" "+this.name;
    }
}

const baby=new Child("Asif");
console.log(baby);
const baby2=new Child("Alif");
console.log(baby2.getFullName());