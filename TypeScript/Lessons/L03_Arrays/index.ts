//General array declaration type
let  fruits:string[] = ["apple", "mango", "banana"];
console.log(fruits);

fruits[0] = "pineApple";
console.log(fruits);

let isMarrie:boolean[] = [true,false,true,false];
console.log(isMarrie);


//using any keyword array declaration type

let organs:any[] =[11,"heart", true];
console.log(organs);

organs[2] = false;
console.log(organs);

//tuple

let vegges:[string,number, boolean] = ["Potato", 22,false];
console.log(vegges);
vegges[1] = 69;
console.log(vegges);

//using map function
let cars:string []= ['ford', "BMW", "F1"];
console.log(cars);
const mapping = cars.map(car =>{
    console.log(car);
})

//using Objects
let coke ={
    color:"black",
    sugar: 30
}
let sprite={
    color: "Blue",
    sugar:40
}
let miranda ={ 
    color: "Brown",
    
}
//converting to ArrayOfObjects through typescript
const addingArr:{color:string;sugar?:number}[] = [coke,miranda, sprite]; //the question marks implies that there is no need that sugar must be available
console.log(addingArr);

//printing only array using map and assigning the type inside it
addingArr.map((x:{ color:string, sugar?:number}) =>{
console.log(x);
})



