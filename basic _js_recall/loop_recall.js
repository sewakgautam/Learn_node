let total = 4;
let strings = "*";

// this is first time i had try
// for(let i=0;i<total;i++){
//     for(let j=i; j<=i;j++){
//         console.log(strings);
//         strings+="*"
//     }
// }


// i realized that this pattern can also be done on single loop
for(let i = 1; i<=total; i++){
    console.log(strings);
    strings+="*"
}