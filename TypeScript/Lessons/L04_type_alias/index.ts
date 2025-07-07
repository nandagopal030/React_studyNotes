type User = {id:number, name:string, isActive:boolean};

const remo:User = {
    name:"remo",
    id: 23,
    isActive: true
}
const modi:User = {
    name: "Modi",
    id: 420,
    isActive:true
}
const DMK:User = {
    name: "DMK",
    id: 40,
    isActive:false
}

//using map function

let mapper = (user:User):void =>{
    console.log(user);
}
mapper(remo);
mapper(modi)
mapper(DMK);

type stringOrNumber =  string | number;

function hepsi (msg:stringOrNumber):void{
    console.log(msg);
}
hepsi("hellow");

type theme = 'yellow' | 'blue';
const color:theme  = "blue"
console.log(color)

