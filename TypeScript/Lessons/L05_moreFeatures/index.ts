enum serverResponse {
    success = "200",
    Error  = "209"
}

interface ResponseData {
    responseMsg: string,
    msg: string,
}

function mainObj(): ResponseData {
    return {
        responseMsg: serverResponse.success,
        msg: "Nahh I am good"
    };
}

console.log(mainObj());

//Type assertion

let a:any= "This is something un usual";
let str:number = (a as string).length;
console.log(str);

