import { isVariableDeclaration } from "typescript";

function relative(message:string):boolean{
    console.log("This is a message from boolean da", message);
  return false;
}
console.log(relative("YOv nan true ra"));

function add(num1:number, num2:number):boolean{
    if(num1 > num2){
        return true;
    }
    return false;
}
console.log(add(12,44));

//arrow function
const logger = (logMessage:string)=>{
    console.log(logMessage);
}
console.log(logger("Error, 404"));

const multiply = function(num1:number,num2:number):number{
   return num1 * num2;
}
console.log(multiply(2,4));

function chatBot(input:string | number):void{
    if(input == 'string'){
        console.log("THis is a string");
    }else if(input == 'number'){
        console.log("This is a number type buddy");
    }else{
        console.log("not a null not  a string");
    }
    console.log(input)
}
chatBot(2);

//Objects

function empdetails ({username,age}:{username:string,age:number}):{
    username:string, age:number, isValid:boolean}{
        return {username, age ,isValid: age >20 };
    }
    console.log(empdetails({username:"jvkda", age:11}))
