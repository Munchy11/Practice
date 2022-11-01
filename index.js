const sportArray = [
  "Hockey",
  "Badminton",
  "Basketball",
  "Football",
  "Volleyball",
  "Soccer",
];

const commaSpace = sportArray.join(" , ");

let sports = document.getElementById("sportArray");

sports.innerHTML = commaSpace;
sports.innerHTML = commaSpace.replace("Soccer"," and Soccer");


console.log(sportArray.toString().replace("Hockey", "and Badminton"));

