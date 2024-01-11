const prompt=require("prompt-sync")();
var a = prompt("Enter the word");
var b = prompt("Enter the word");
let l1 = a.length;
let l2 = b.length;
if(l1==l2)
length = true;
else
length = false;
if(length){
var len = l1;
}
a.sort;
b.sort;
var count=0;
for(let i=0;i<l1;i++)
{
    a[i]==b[i];
    count++;
}
//  console.log(count);
if(count==l1)
console.log("Anagram");
else
console.log("Not a anagram");
