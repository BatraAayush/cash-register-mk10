const billAmt = document.querySelector("#bill-amount");
const cashAmt = document.querySelector("#cash-amount");
const checkBtn = document.querySelector("#check-btn");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const message = document.querySelector("#error-message");
const output = document.querySelector("#output");
const hidden = document.querySelector("#hidden");
const billBtn = document.querySelector("#bill-button");
const notes = [2000, 500, 100, 20, 10, 5, 1];
const cashTable = document.querySelector("#cashTable");

hidden.style.display = "none";

billBtn.addEventListener("click", () => {
  message.style.display = "none";
  cashTable.style.display = "none";


  if (Number(billAmt.value) > 0) {
    hidden.style.display = "block";
    billBtn.style.display = "none";
  } else {
    errorMessage("Bill Amount should be greater than 0");
  }
});

checkBtn.addEventListener("click", () => {
  message.style.display = "none";
  cashTable.style.display = "none";
  output.style.display = "none";
  if (Number(billAmt.value) > 0) {
    if (Number(cashAmt.value) > Number(billAmt.value)) {
      let returnAmount = Number(cashAmt.value) - Number(billAmt.value);
      cashTable.style.display = "table";
      noteCalculator(returnAmount);
      output.style.display = "block";
      output.innerHTML = `Amount to be returned is <strong id="return">&#8377;${returnAmount}</strong>`;
    } else if (Number(cashAmt.value) === Number(billAmt.value)){
      output.style.display = "block";
      output.innerHTML = `Bill has been paid`;      
    } else {
      errorMessage("Insufficient Cash Amount!");
    }
  } else {
    errorMessage("Bill Amount should be greater than 0");
  }
});

function errorMessage(msg) {
  message.style.display = "block";
  message.innerHTML = msg;
}

function noteCalculator(amt) {
  for (let i = 0; i < notes.length; i++) {
    let noteCount = Math.trunc(amt / notes[i]);
    noOfNotes[i].innerHTML = noteCount;
    amt = amt % notes[i];
  }
}
