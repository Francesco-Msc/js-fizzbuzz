// eseguo un ciclo in cui mi stampa tutti i numeri da 1 a 100

for (let i = 1; i <= 100; i++){
    
    //aggiungo delle condizioni
    
    if ((i % 5 === 0) && (i % 3 === 0)){        //se il numero è multiplo di 3 e di 5 stampo FizzBuzz
        console.log('FizzBuzz');
    } else if (i % 5 === 0){                    //se il numero è multiplo di 5 stampa Buzz
        console.log('Buzz');
    } else if (i % 3 === 0){
        console.log('Fizz');                    //se il numero è multiplo di 3 stampa Fizz
    } else {
        console.log(i);
    }
}