const person={name:'asif',id:'180201015',gfName:'nai',address:'Ranpur'};
const{name,gfName}=person;
console.log(name,gfName);

const complexObject={
    name:'abs',
    info:{
        address:"rangpur",
        leader:"tiger"
    }
}
const {leader}=complexObject.info;
console.log(leader);

const array=['asif','alif','xyz','lool'];
const [prothom,ditio,...reamining]=array;
console.log(reamining);