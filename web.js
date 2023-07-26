const main = document.querySelector("main");
const voicesSelect = document.getElementById("voices");
const textarea = document.getElementById("text");
const readButton = document.getElementById("read");
const toggleButton = document.getElementById("toggle");
const closeButton = document.getElementById("close");

const data = [
  {
    image: "basketball.webp",
    text: "Basketball can be played on courts that are both indoors and outside. ",
  },
  {
    image: "golf.webp",
    text: "Golf is a club-and-ball sport in which players use various clubs to hit balls into a series of holes on a course in as few strokes as possible",
  },
  {
    image: "tennis.webp",
    text: "Tennis is a racket sport that is played either individually against a single opponent or between two teams of two players each",
  },
  {
    image: "badminton1.png",
    text: "Badminton is a racquet sport played using racquets to hit a shuttlecock across a net",
  },
  {
    image: "volleyball.webp",
    text: "Volleyball is a team sport in which two teams of six players are separated by a net.",
  },
  {
    image: "football.webp",
    text: "Football game is a worldwide famous game that is very popular and watched by fans, and it does not require any introductions.",
  },
  {
    image: "cricket.webp",
    text: "Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard pitch with a wicket at each end",
  },
  {
    image: "table tennis2.jpg",
    text: "Table tennis is an outdoor activity where two or four players hit a small ball back and front across the table using small racket",
  },
  {
    image: "archery.webp",
    text: "Archery is a game where we use arrows to hit the target.",
  },
  {
    image: "kabbdi.webp",
    text: "Kabaddi is a contact team sport played between two teams of seven players.",
  },
  {
    image: "Hockey1.webp",
    text: "The national sport of India is Hockey which is played outdoors and is a famous game that is also played in the Olympics years ago",
  },
  {
    image: "boxing.webp",
    text: "Boxing is a sport in which two people are fitting while wearing protective gloves and other protective equipment.",
  },
];

// function createBox(item) {
//   const box = document.createElement("div");
//   const { image, text } = item;
//   box.classList.add("box");
//   box.innerHTML = `
//     <img src='https://github.com/PriyankaSarode1202/speech-text-reader.git/${image}.jpg?raw=true' alt="${text}"/>
//     <p class="info">${text}</p>
//     `;
//   box.addEventListener("click", () => handleSpeech(text, box));
//   main.appendChild(box);
// }
function createBox(item) {
  const box = document.createElement("div");
  const { image, text } = item;
  box.classList.add("box");
  box.innerHTML = `
    <img src='https://raw.githubusercontent.com/PriyankaSarode1202/speech-text-reader/main/${image}' alt="${text}"/>
    <p class="info">${text}</p>
  `;
  box.addEventListener("click", () => handleSpeech(text, box));
  main.appendChild(box);
}



data.forEach(createBox);

let voices = [];

function getVoices() {
  voices = speechSynthesis.getVoices();
  voices.forEach((voice) => {
    const option = document.createElement("option");
    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;
    voicesSelect.appendChild(option);
  });
}

function handleSpeech(text, box) {
  setTextMessage(text);
  speakText();
  box.classList.add("active");
  setTimeout(() => box.classList.remove("active"), 800);
}

const message = new SpeechSynthesisUtterance();

function setTextMessage(text) {
  message.text = text;
}

function speakText() {
  speechSynthesis.speak(message);
}

function setVoice(e) {
  message.voice = voices.find((voice) => voice.name === e.target.value);
}

// Event Listeners
toggleButton.addEventListener("click", () => {
  document.getElementById("text-box").classList.toggle("show");
});
closeButton.addEventListener("click", () => {
  document.getElementById("text-box").classList.remove("show");
});
speechSynthesis.addEventListener("voiceschanged", getVoices);
voicesSelect.addEventListener("change", setVoice);
readButton.addEventListener("click", () => {
  setTextMessage(textarea.value);
  speakText();
});

getVoices();