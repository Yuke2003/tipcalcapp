const btn1 = document.querySelectorAll('#btn');
const amount = document.getElementById('amount');
const custom = document.getElementById('custom');
const error = document.querySelector('error');
const billTipAmount = document.getElementById('tip');
const billTotalPerPerson = document.getElementById('total');
const reset = document.getElementById('reset');
const noof = document.getElementById('noof')



btn1.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        let tipvalue = e.target.innerText;

        calculateTip(
            parseFloat(amount.value),
            parseFloat(tipvalue),
            parseFloat(noof.value)
        )
    })
})

function calculateTip(amount,tipvalue,noof){
    let tipAmount = (((amount/noof)*(tipvalue/100)));
    let tip = tipAmount.toFixed(2);

    let totalAmount = (tipAmount * noof + amount) / noof;
    totalAmount = totalAmount.toFixed(2);

    billTipAmount.innerHTML = tip;
    billTotalPerPerson.innerHTML = totalAmount;
}

reset.addEventListener('click',resolution)

function resolution() {
    billTipAmount.innerHTML = "0.00";
    billTotalPerPerson.innerHTML = "0.00";
    amount.value = "";
    noof.value = "";
}

