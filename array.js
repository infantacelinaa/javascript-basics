const prompt=require("prompt-sync")();
var n = prompt("Enter the length: ");
var a =[];
for(var i=0;i<n;i++)
a[i] = prompt("Enter the array values: ");
for(var i=0;i<n;i++)
{
    var len = a[i].length;
    if(len % 2==0){
    console.log(a[i]);
    }
}
// console.log(a);