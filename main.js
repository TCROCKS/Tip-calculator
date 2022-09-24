let bill = document.getElementById("billAmount");
let per_tip = document.getElementById("percentageTip");
let tip_amt = document.getElementById("tipAmount");
let total = document.getElementById("totalAmount");
let error = document.getElementById("errorMessage").value;
let msg = "Please Enter a valid Input";

function calculate() {
    if (bill.value === "") {
        document.getElementById("errorMessage").innerHTML = msg;
    } else if (per_tip.value === "") {
        document.getElementById("errorMessage").innerHTML = msg;
    } else {
        document.getElementById("errorMessage").innerHTML = "";
        let bill_2 = parseInt(bill.value);
        let tip = parseInt(per_tip.value);
        tip_amt.value = (tip / 100) * bill_2;
        total.value = bill_2 + parseInt(tip_amt.value);
    }
}