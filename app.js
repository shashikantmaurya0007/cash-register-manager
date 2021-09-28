function render() {
    document.getElementById("cash-amount").style.display = "none";
    document.getElementById("table").style.display = "none";
}

render();

var billamount;
var cashamount;
var cou = 0;

function getBillAmount() {
    // console.log(document.querySelector(".billRecieved.form-cotrol"));

    billamount = document.querySelector("#billamountInput").value;
    console.log(billamount);

    if (billamount == "" || Number(billamount) <= 0) {
        console.log(billamount);
        document.getElementById("headingh2").style.display = "block"; //change
        document.getElementById("headingh2").innerHTML =
            "*please enter the correct bill amount to proceed further*";
        console.log("wapas");
        document.getElementById("table").style.display = "none"; //change
        return true; //true change
    }
    document.getElementById("headingh2").style.display = "none";
    document.getElementById("cash-amount").style.display = "block";
    // count++;//change
}

function getCashAmount() {
    cashamount = document.querySelector("#inputCash").value;
    console.log(cashamount);
    getBillAmount(); //change
    cou++;
    console.log("count", count);
    // if (cou > 0) {
    //     getBillAmount();
    // }
    if (cashamount == "" || Number(cashamount) <= 0) {
        document.getElementById("headingh3").style.display = "block"; //changes

        console.log(cashamount, "empty");
        document.getElementById("headingh3").innerHTML =
            "*please enter the correct cash amount*";
        return;
    }

    document.getElementById("headingh3").style.display = "none";

    var diff = cashamount - billamount;
    console.log("difference is" + diff);
    if (billamount < 0) {
        document.getElementById("table").style.display = "none";
        return;
    }

    diff = parseInt(diff, 10);
    console.log(diff);
    if (diff < 0) {
        document.getElementById("headingh3").innerHTML =
            "*sorry you are short of cash!*";
        document.getElementById("headingh3").style.display = "block";
        document.getElementById("table").style.display = "none"; //change
        return;
    }
    if (diff == 0) {
        document.getElementById("headingh3").innerHTML = "*No Cash to Return*";
        document.getElementById("headingh3").style.display = "block"; //change block to hide
        document.getElementById("table").style.display = "none"; //change
        return;
    }
    var count = 0;
    if (diff >= 2000) {
        count = Math.floor(diff / 2000);
        document.getElementById("twoth").innerHTML = count;
        diff = diff - 2000 * count;
        document.getElementById("table").style.display = "block";
    }
    if (diff >= 500) {
        count = Math.floor(diff / 500);
        document.getElementById("fiveh").innerHTML = count;
        diff = diff - 500 * count;
        document.getElementById("table").style.display = "block";
    }
    if (diff >= 100) {
        count = Math.floor(diff / 100);
        document.getElementById("hun").innerHTML = count;
        diff = diff - 100 * count;
        document.getElementById("table").style.display = "block";
    }
    if (diff >= 20) {
        count = Math.floor(diff / 20);
        document.getElementById("twen").innerHTML = count;
        diff = diff - 20 * count;
        document.getElementById("table").style.display = "block";
    }
    if (diff >= 10) {
        count = Math.floor(diff / 10);
        document.getElementById("ten").innerHTML = count;
        diff = diff - 10 * count;
        document.getElementById("table").style.display = "block";
    }
    if (diff >= 5) {
        count = Math.floor(diff / 5);
        document.getElementById("five").innerHTML = count;
        diff = diff - 5 * count;
        document.getElementById("table").style.display = "block";
    }
    if (diff >= 1) {
        count = Math.floor(diff / 1);
        document.getElementById("one").innerHTML = count;
        diff = diff - 1 * count;
        document.getElementById("table").style.display = "block";
    }
    //     document.getElementById("table").style.display = "block"; //change
}