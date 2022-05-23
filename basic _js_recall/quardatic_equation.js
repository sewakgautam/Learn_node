// formula for the quardatic equatio is : ax^2+bx+c=0

let r1, r2;
let a = 1;
let b = 6;
let c = 5;

let desc = b *b -4 * a * c;

if (desc > 0){
    r1 = (-b + Math.sqrt(desc))/2*a
    r2 = (-b - Math.sqrt(desc))/2*a
    console.log(`The roots of quadratic equation are ${r1} and ${r2} `)
}
else if(desc == 0){
    r1 = r2 = -b/2*a
    console.log(`The roots of quadratic equation are ${r1} and ${r2} `)

}
else{
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-desc) / (2 * a)).toFixed(2);

    // result
    console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}