const fs = require("fs");

const array = ["amine", "bennani", "kabchi", 42];

const data = JSON.stringify(array);

fs.writeFile("monTableau.json", data, (err) => {
  if (err) {
    console.error(err);
  }
});

fs.readFile("monTableau.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    const paredArray = JSON.parse(data);
    console.log(paredArray);
  }
});