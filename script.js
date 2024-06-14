const superheros = [
  "spooderman",
  "batman",
  "superman",
  "wonder woman",
  "captain america",
  "iron man",
  "hulk",
  "thor",
  "black panther",
  "black widow",
  "hawkeye",
  "ant man",
  "wasp",
  "vision",
  "scarlet witch",
  "falcon",
  "rocket racoon",
  "spiderman",
  "captain marvel",
  "doctor strange",
  "black bolt",
  "winter soldier",
  "captain marvel",
  "star lord",
  "gamora",
  "groot",
  "avoongers",
  "falcon",
  "free choice",
  "avengers"
];
function generatesuperhero() {
  const randomIndex = Math.floor(Math.random() * superheros.length);
  const superhero = superheros[randomIndex];
  document.getElementById("superhero game").innerHTML = superhero;
}
