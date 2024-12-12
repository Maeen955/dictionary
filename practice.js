const inputBox = document.getElementById("inputBox")
const inputBtn = document.getElementById("inputBtn")
const word = document.getElementById("word")
const ad = document.getElementById("ad")
const ex = document.getElementById("ex")
const lu = document.getElementById("lu")
const myAudio = document.getElementById("myAudio")
const playButton = document.getElementById("playButton")
const result = document.getElementById("result")
const phone = document.getElementById("phone")

inputBtn.addEventListener("click", () => {
    fetchData(inputBox.value.trim());
    inputBox.value = "";
    result.style.display = "block"
})

function fetchData(datum) {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${datum}`;
    fetch(url).then(response => response.json())
        .then(data => {
            word.innerText = data[0].word;
            ex.innerText = data[0].meanings[0].definitions[0].definition;
            const example = data[0].meanings[0].definitions[0].example;
            lu.innerText = example ? example : null;
            ad.innerText = data[0].meanings[0].partOfSpeech;
            myAudio.src = data[0].phonetics[0].audio;
            phone.innerText = `/${data[0].phonetic}/`
        })

}
playButton.addEventListener("click", () => {
    myAudio.play();
})
