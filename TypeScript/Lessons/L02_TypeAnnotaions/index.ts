let username:string = "Mambo"
console.log(username);

let age:number = 23;
console.log(age);


let isMarried:boolean = true;
console.log(isMarried);
isMarried = false;
console.log(isMarried);

//any which implies any value can be assigned like js without considering about the type
let unknown:any = "Kamba";

unknown = 22;

unknown = true;
console.log(unknown)

//null 
let balance:null = null;
console.log(balance); //the object type will also become null 

//undefined

let schoolname:undefined;
console.log(schoolname)

//Type inference which states any variable is being assigned can easily identify whats the main type of it by looking at the value of it.

let Lname = "gopal"
let passedOut = false;
let passedOutYear = 2023;

//union type

let billAmount: number | string = "200";
billAmount = 1000;
console.log(billAmount)

//Literal type

let trafficSignal: 'red' | 'blue' | 'green';
trafficSignal =  'blue';
// trafficSignal = 'white' thi will cause errorwhite is not being defined as a literal type
console.log(trafficSignal);

let rollDice: 1 |2 |3 |4 |5 |6;
rollDice = 3;
console.log(rollDice);

//objects 
let vehicle:{type:string, topSpeed:number, isProduction: false} = {
    type: "Audi",
    topSpeed:1000,
    isProduction: false,
}
console.log(vehicle)

//objects destructuring

const {type, topSpeed}: {type:string ; topSpeed: number} = vehicle;