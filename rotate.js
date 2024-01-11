const prompt=require("prompt-sync")();
let n = prompt("Enter the number");
var a=[];
for(var i=0;i<n;i++)
{
 a[i] = prompt("Enter the list values");
}
var r = prompt("Enter the rotation");
console.log(a);
var len=a.length;
for(var i=r;i<n;i++)
console.log(a[i]);
for(var j=0;j<r;j++)
console.log(a[j]);
