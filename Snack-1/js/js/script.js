// Creazione dell'array di oggetti
const bikes = [
    { nome: "Bianchi Sprint", peso: 8.2 },
    { nome: "Trek Domane", peso: 7.5 },
    { nome: "Cannondale Synapse", peso: 7.8 },
    { nome: "Specialized Tarmac", peso: 6.9 },
    { nome: "Pinarello Dogma", peso: 6.5 }
  ];
  
  // Variabile per memorizzare la bici con peso minore
  let lightestBike = bikes[0];
  
  // Ciclo per trovare la bici più leggera
  for (let i = 1; i < bikes.length; i++) {
    if (bikes[i].peso < lightestBike.peso) {
      lightestBike = bikes[i];
    }
  }
  
  // Stampiamo il risultato a schermo (console e DOM)
  console.log(`La bici più leggera è la ${lightestBike.nome} con un peso di ${lightestBike.peso} kg.`);
  
  // Mostriamo il risultato nel DOM
  document.body.innerHTML = `
    <h2>La bici più leggera è:</h2>
    <p><strong>Nome:</strong> ${lightestBike.nome}</p>
    <p><strong>Peso:</strong> ${lightestBike.peso} kg</p>
  `;