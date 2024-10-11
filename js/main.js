// eseguo un ciclo in cui mi stampa tutti i numeri da 1 a 100

for (let i = 1; i <= 100; i++){
    
    // aggiungo una condizione per cui se il numero è multiplo di 3 e di 5 stampo fizz buzz
    if ((i % 5 === 0) && (i % 3 === 0)){
        console.log('FizzBuzz');
    } else {
        console.log(i);
    }
}