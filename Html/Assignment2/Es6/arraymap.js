/*
let arr = [1, 2, 3];
 //create new array with value +1 ; using for loop
let result = arr.map((value) => {
  return value + 1;
});
console.log(result);
 
//console.log(arr.forEach((value) => value + 1)); // map with implicit return
*/


let array=[2,3,4,8];
let result=array.map((value)=>
{
    return value+1;
});
console.log(result);



let array=[1,2,3,4,4];
let sum=0;
let i=0;
while(i<=array.length-1)
{
 sum=sum + array[i];
   i++;
}
console.log(sum);

let array=[1,2,3,4,4];
let sum=0;
let i=0;
do{
  sum=sum+array[i];
  i++;
}
while(i<=array.length-1)

console.log(sum);



let num=[1,2,3,4,4];
let sum=0;
let i=0;

for( value of num)
{
  sum=sum + num[i];
  i++;
}


console.log(sum);



let num=(a,b,c)=>
{
      console.log(a+b+c);
}
num(2,4,9);



