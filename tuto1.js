const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Quel est le titre ? ', (titre) => {
  rl.question('Quelle est la durée ? ', (duree) => {
    rl.question('Quelle est la date de début ? ', (dateDebut) => {
      rl.question('Qui est le formateur ? ', (formateur) => {
        console.log(`Détails de la formation :`);
        console.log(`Titre : ${titre}`);
        console.log(`Durée : ${duree}`);
        console.log(`Date de début : ${dateDebut}`);
        console.log(`Formateur : ${formateur}`);
        rl.close();
      });
    });
  });
});
