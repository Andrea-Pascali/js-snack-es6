// Nuovo array
function getValuesBetween(array, a, b) {
   
    // Controllo che A sia minore di B e che i valori siano validi
    if (a < 0 || b >= array.length || a >= b) {
      console.error("Errore: assicurati che A sia minore di B e nei limiti dell'array.");
      return [];
    }
  
    // Metodo slice
    const newArray = array.slice(a, b + 1);
    return newArray;
  }
  
  // Array
  const arrayletters = ["a", "b", "c", "d", "e", "f", "g"];
  
  // Definiamo i numeri A e B
  const a = 2;
  const b = 5;
  
  // Invocazione della funzione
  const resultArray = getValuesBetween(arrayletters, a, b);
  
  // Risultato in Console
  console.log(`Array originale:`, arrayletters);
  console.log(`Nuovo array con posizioni tra ${a} e ${b}:`, resultArray);