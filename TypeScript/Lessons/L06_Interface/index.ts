// interface Ivehicle {
//    vehicleName:string,
//    roadPrice: number,
//    isRegisterd:boolean,
//    delivered():string
// }
// const model:Ivehicle = {
//     vehicleName:"Skoda",
//     roadPrice:20000,
//     isRegisterd:false,
//     delivered(){
//         return `Name:${this.vehicleName},Registered: ${this.isRegisterd} `
//     }
// }

// console.log(model.delivered());

// interface ibasemodel {
//     id:number
// }
// interface details{
//     name:string,
//     ismarried:boolean
// }
// interface Iuser extends ibasemodel, details{
//   userDetails():void;
// }

// let arun:Iuser = {
//     id:1,
//     name:"arun",
//     ismarried: true,
//     userDetails():void{
//         console.log(this.id);
//     }
// }
// arun.userDetails();


class user {
    constructor(
        public id: number,
        public name: string,
        public location: string,
        public salary: number
    ) {}

    public userDetails(): void {
        console.log(`${this.id}, ${this.name}, ${this.location}, ${this.salary}`);
    }

    public salaryDetails(salary: number): number {
        return salary * 2;
    }
}

let arun = new user(1, "anann", "ajvndjvknvjd", 23);
arun.userDetails();
console.log(arun.salaryDetails(arun.salary));
