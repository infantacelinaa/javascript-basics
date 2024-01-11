const prompt=require("prompt-sync")();
var amount = prompt("Enter the amount: ");
var total = amount;
var a=[];
while(total>0)
{
    if(total>=25)
    {
        a.push(25);
        total=total-25;
    }
    if(total>=10)
    {
        a.push(10);
        total=total-10;
    }
    else if(total>=5)
    {
        a.push(5);
        total=total-5;
    }
    else if(total>=2)
    {
        a.push(2);
        total=total-2;
    }
    else if(total>=1)
    {
        a.push(1);
        total=total-1;
    }
}
console.log(a);