// let n:number =6;
// let a:string= "*";

// for (let i:number =1; i<=n; i++){
// for(let j:number=1; j<=i; j++){
// a += "*"


// }

// a += "\n";
// }
// console.log(a);


// let n:number=10;
// let a:string= "";

// for (let i:number= 1; i<=n ;i++){
// for(let j:number= 1; j<=i; j++){
    
// a+= "*";
// }


// a+= "\n";

// }
// console.log(a);

// let n:number=15;
// let a:string= "";

// for(let i:number= 1; i<=n; i++){
// for(let j:number= 1; j<=i; j++){
// a+= "*";
// }
// a+= "\n"

// }
// console.log(a);

// let n:number = 8;
// let a:string= "";

// for(let i:number=1 ; i<=n; i++){
// for (let j:number=1 ; j<=i; j++){
// a+= "^";

// }
// a+= "\n"

// }
// console.log(a);




// Prompt Sync Libarary [Need to install prompt Sync]

let prompt = require('prompt-sync')();

let n:  number = parseInt(prompt ('please enter number of row:'));
let a:string= "";

for(let i:number= 1; i<= n; i++){
for(let j:number= 1; j<=i; j++){
a+= "*";
}
a+= "\n";

}
console.log(a);
export{}