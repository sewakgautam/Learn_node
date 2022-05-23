let num = -9;
pon(num);
function pon(value){
    if(value > 0) console.log(`this ${value} is Positive Number`);
    else if(value == 0) console.log(`this ${value} is Zero`)
    else console.log(`this ${value} is negative Number`)
}