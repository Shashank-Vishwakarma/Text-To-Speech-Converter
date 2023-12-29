const textBox = document.querySelector(".container textarea");
const listenBtn = document.querySelector(".container button");

listenBtn.addEventListener("click", ()=>{
    let utterance = new SpeechSynthesisUtterance();
    utterance.text = textBox.value;
    utterance.voice = speechSynthesis.getVoices()[0];

    speechSynthesis.speak(utterance);
});

speechSynthesis.cancel();