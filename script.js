const randNum = () => {
   return Math.floor(Math.random() * 13);
};

let rand1 = [
   "mountains",
   "lakes",
   "landscapes",
   "people",
   "rivers",
   "forests",
   "sewers",
   "playgrounds",
   "politicians",
   "celebrities",
   "pets",
   "hobos",
   "skies",
];
let rand2 = [
   "Sweden",
   "Norway",
   "Denmark",
   "Finland",
   "England",
   "USA",
   "France",
   "Singapore",
   "the world",
   "the outer universes",
   "the Dagobah system",
   "Las Vegas",
   "Patagonia",
];
let rand3 = [
   "beautiful",
   "stinky",
   "very well kept",
   "non-existent",
   "very strange-looking",
   "aliens in disguise",
   "rotting from the inside",
   "a marvelous sight to behold",
   "douchey by nature",
   "the stuff of dreams",
   "flat",
   "crawling with lice",
   "possessed by the devil",
];
words = [rand1, rand2, rand3];

let string = `The ${words[0][randNum()]} of ${words[1][randNum()]} are ${
   words[2][randNum()]
}.`;

console.log(string);

const worldFact = document.getElementById("Fact");
worldFact.innerHTML = string;
const genBtn = document.getElementById("Generate");
genBtn.addEventListener("click", function () {
   location.reload();
});
