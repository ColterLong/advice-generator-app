const adviceText = document.getElementById("advice-text");
const dice = document.getElementById("dice");
const adviceNum = document.getElementById("advice-number");
let randNum;

const getNewFortune = async () => {
    randNum = Math.floor(Math.random() * 225);
    const res = await fetch(`https://api.adviceslip.com/advice/${randNum}`)
    const data = await res.json();
    adviceText.innerHTML = '"' + data.slip.advice + '"';
    adviceNum.innerHTML = "Advice #" + data.slip.id;
    console.log(data);
}

dice.onclick = getNewFortune;
window.onload = getNewFortune;
