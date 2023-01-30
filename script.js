const diceBtn = document.getElementById("dice");
const adviceId = document.getElementById("advice-id");
const adviceEl = document.getElementById("advice");

const getAdvice = async () => {
  try {
    adviceEl.innerText = `"..."`;
    adviceId.innerText = "...";
    diceBtn.disable = true;

    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    const adviceObj = await data.slip;

    diceBtn.disable = false;

    adviceId.innerText = adviceObj.id;
    adviceEl.innerText = `"${adviceObj.advice}"`;
  } catch (error) {
    adviceEl.innerText = "An error happened, try again later";
    diceBtn.disable = false;
  }
};

diceBtn.addEventListener("click", getAdvice);
