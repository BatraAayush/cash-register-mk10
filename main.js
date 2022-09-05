const billAmt = document.querySelector("#bill-amount");
const cashAmt = document.querySelector("#cash-amount");
const checkBtn = document.querySelector("#check-btn");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const message = document.querySelector("#error-message");
const rtn = document.querySelector("#return");
const hidden = document.querySelector("#hidden");
const billBtn = document.querySelector("#bill-button");
const notes = [2000, 500, 100, 20, 10, 5, 1];

hidden.style.display = "none";

billBtn.addEventListener("click", () => {
  message.style.display = "none";

  if (Number(billAmt.value) > 0) {
    hidden.style.display = "block";
    billBtn.style.display = "none";
  } else {
    errorMessage("Bill amount should be greater than 0");
  }
});
checkBtn.addEventListener("click", () => {
  message.style.display = "none";
  if (Number(cashAmt.value) >= Number(billAmt.value)) {
    let returnAmount = Number(cashAmt.value) - Number(billAmt.value);
    noteCalculator(returnAmount);
    rtn.innerHTML = returnAmount;
  } else {
    errorMessage("Insufficient cash amount!");
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