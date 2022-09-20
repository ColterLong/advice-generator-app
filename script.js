const adviceText = document.getElementById("advice-text");
const dice = document.getElementById("dice");
const adviceNum = document.getElementById("advice-number");

const getNewFortune = async () => {
    const res = await fetch(`https://api.adviceslip.com/advice`)
    const data = await res.json();
    adviceText.innerHTML = '"' + data.slip.advice + '"';
    adviceNum.innerHTML = "Advice #" + data.slip.id;
    console.log(data);
}

dice.onclick = getNewFortune;
window.onload = getNewFortune;
