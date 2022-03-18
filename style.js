var w1 = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const d = new Date("February 24, 1990")
let wd = d.getDay()
console.log("Inputed date is February 24, 1990")
console.log("Day Logged in Number form: "+ wd)
console.log("Printing the day using switch")
switch(wd)
{
    case 0: console.log("Sunday");
            break;
    case 1: console.log("Monday");
            break;
    case 2: console.log("Tuesday");
            break;
    case 3: console.log("Wedday");
            break;
    case 4: console.log("Thurday");
            break;
    case 5: console.log("Friday");
            break;
    case 6: console.log("Saturday");
            break;
    
}
console.log("Printing the day using Array's")
console.log(w1[wd])
