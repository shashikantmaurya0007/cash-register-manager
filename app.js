
function render() {

    document.getElementById("cash-amount").style.display = "none";
    document.getElementById("table").style.display = "none";


}

render();

var billamount;
var cashamount;

function getBillAmount()
{
    
    // console.log(document.querySelector(".billRecieved.form-cotrol"));
    
    billamount=document.querySelector(".form-floating.mb-3.billRecieved input").value;
    console.log(billamount);
    if(billamount=="")
    {
       console.log(billamount);
       document.getElementById("headingh2").innerHTML="*please enter the bill amount to proceed further*";
    return;
    }
    document.getElementById("headingh2").style.display="none";
    document.getElementById("cash-amount").style.display = "block";

     

}
function getCashAmount()
{
    cashamount=document.querySelector(".form-floating.mb-3.billRecievedd input").value;
    console.log(cashamount);
    if(cashamount=="")
    {
       console.log(cashamount,"empty");
       document.getElementById("headingh3").innerHTML="*please enter the cash amount*";
    return;
    }
    
    document.getElementById("headingh3").style.display="none";
    
    var diff=cashamount-billamount;
    
    diff=parseInt(diff,10);
    console.log(diff);
    if(diff<0)
    {
        document.getElementById("headingh3").innerHTML="*sorry you are short of cash!*";
        document.getElementById("headingh3").style.display="block";
        return;
    }

    var count=0;
    if(diff>=2000)
    {
        count=Math.floor(diff/2000);
        document.getElementById("twoth").innerHTML=count;
        diff=diff-2000*count;    
    }
    if(diff>=500)
    {
        count=Math.floor(diff/500);
        document.getElementById("fiveh").innerHTML=count;
        diff=diff-500*count;    
    }
    if(diff>=100)
    {
        count=Math.floor(diff/100);
        document.getElementById("hun").innerHTML=count;
        diff=diff-100*count;    
    }
    if(diff>=20)
    {
        count=Math.floor(diff/20);
        document.getElementById("twen").innerHTML=count;
        diff=diff-20*count;    
    }
    if(diff>=10)
    {
        count=Math.floor(diff/10);
        document.getElementById("ten").innerHTML=count;
        diff=diff-10*count;    
    }
    if(diff>=5)
    {
        count=Math.floor(diff/5);
        document.getElementById("five").innerHTML=count;
        diff=diff-5*count;    
    }
    if(diff>=1)
    {
        count=Math.floor(diff/1);
        document.getElementById("fiveh").innerHTML=count;
        diff=diff-1*count;    
    }
    document.getElementById("table").style.display = "block";


}