function doubleIT(num){
    return num*2;
}
const total=doubleIT(2);
console.log(total);

const doubleIT2=function(num){
    return 2*num;
}
const total2=doubleIT2(2);
console.log(total2);

const doubleIT3=num =>num*2;
const total3=doubleIT2(2);
console.log(total3);

const add=(x,y)=>x+y;
console.log(add(2,3));

const give5=()=>5;
console.log(give5());

const doMath=(x,y)=>{
    const sum=x+y;
    const diff=x-y;
    const result=sum*diff;
    return result;
}

const math=doMath(7,5);
console.log(math);