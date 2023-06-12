/* Decimal to Binary*/
const num1=3;
const binary=num1.toString(2);
console.log(binary);

/*Binary to Decimal*/
let num2='10';
let res=parseInt(num2,2);
console.log(num2);


/*String */
var x='decimal';
var y='binary';
for(var i=0;i<x.length && i<y.length;i++){
process.stdout.write(x[i]+" "+y[i]+" ");
}
while(i<x.length){
    console.log(x[i]+" ");
    i++;
}
while(i<y.length){
    console.log(y[i]+" ");
    i++;
}