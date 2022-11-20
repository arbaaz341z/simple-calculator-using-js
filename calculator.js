function sum(x,y){
    return (x+y);
}

function diff(x,y){
    return (x-y);
}

function mul(x,y){
    return (x*y);
}

function div(x,y){
    return (x/y);
}

function rem(x,y){
    return (x%y);
}

function por(x,y){
    return (x**y);
}

let a= prompt("Enter a number: ");
let b= prompt("Enter a second number: ");


console.log("Az Calculator");
console.log("Choose Your Options");
console.log("1. Addition");
console.log("2. Subtraction");
console.log("3. Multiplication");
console.log("4. Division");
console.log("5. Reminder");
console.log("6. Power");
let chc= prompt(" Enter Your Choice: ");
chc=parseInt(chc);
a=parseInt(a);
b=parseInt(b);

switch(chc){
    case 1: {
        console.log("Sum of "+a+" and "+b+" is "+sum(a,b));
        break;
    }
    case 2: {
        console.log("Difference of "+a+" and "+b+" is "+diff(a,b));
        break;
    }
    case 3: {
        console.log("Multiplication of "+a+" and "+b+" is "+mul(a,b));
        break;
    }
    case 4: {
        console.log("Division of "+a+" and "+b+" is "+div(a,b));
        break;
    }
    case 5: {
        console.log("Reminder of "+a+" and "+b+" is "+rem(a,b));
        break;
    }
    case 6: {
        console.log("Power of "+a+" and "+b+" is "+por(a,b));
        break;
    }
    default:{
        console.log("Invalid Choice");
    }
}

