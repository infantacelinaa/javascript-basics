const prompt=require("prompt-sync")();
var string = prompt("Enter a word: ");
var a =[];
for(var i=0;i<string.length;i++)
{
    for(var j=i+1;j<string.length+1;j++)
    {
        a.push(string.slice(i,j));
    }
}
console.log(a);