// Funzione per generare un numero random
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Array di oggetti per le squadre di calcio
  const teams = [
    { nome: "Juventus", punti: 0, falliSubiti: 0 },
    { nome: "Milan", punti: 0, falliSubiti: 0 },
    { nome: "Inter", punti: 0, falliSubiti: 0 },
    { nome: "Roma", punti: 0, falliSubiti: 0 },
    { nome: "Napoli", punti: 0, falliSubiti: 0 }
  ];
  
  // Assegniamo valori random per "punti" e "falliSubiti"
  teams.forEach(team => {
    team.punti = getRandomNumber(20, 90);
    team.falliSubiti = getRandomNumber(10, 50); 
  });
  
  // Array con di nomi e Falli Subiti
  const newTeamsArray = teams.map(team => {
    return {
      nome: team.nome,
      falliSubiti: team.falliSubiti
    };
  });
  
  // Stampiamo in console
  console.log("Array completo delle squadre di calcio:");
  console.table(teams);
  
  console.log("Nuovo array con solo nomi e falli subiti:");
  console.table(newTeamsArray);
  