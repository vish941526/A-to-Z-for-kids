const letterButtons = document.querySelectorAll(".letter-button");
const output = document.getElementById("output");

letterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const letter = button.getAttribute("data-letter");
    const word = getWordForLetter(letter);
    output.textContent = word;

    // Add the animation class for a short duration
    button.classList.add("button-click-animation");
    setTimeout(() => {
      button.classList.remove("button-click-animation");
    }, 2000); // Animation duration in milliseconds
    
    // Speak the letter and word
    speakLetterAndWord(letter, word);
  });
});

function getWordForLetter(letter) {
  const words = {
    A: "Apple",
    B: "Banana",
    C: "Cat",
    D: "Dog",
    E: "Elephant",
    F: "Fish",
    G: "Giraffe",
    H: "Horse",
    I: "Ice Cream",
    J: "Jellyfish",
    K: "Kangaroo",
    L: "Lion",
    M: "Monkey",
    N: "Nest",
    O: "Orange",
    P: "Penguin",
    Q: "Queen",
    R: "Rabbit",
    S: "Sona",
    T: "Tree",
    U: "Umbrella",
    V: "vishal",
    W: "Whale",
    X: "Xylophone",
    Y: "Yak",
    Z: "Zebra"
  };

  return words[letter] || "No word available";
}

function speakLetterAndWord(letter, word) {
    const utterance = new SpeechSynthesisUtterance(`${letter} for ${word}`);
    utterance.lang = "hi-IN"; 
    window.speechSynthesis.speak(utterance);
  }
  
