function asal(...numbers){
    for (let number of numbers) {
        let num = true;
    
        if (number <= 1) {
            num = false;
        }
        else {
            for (let i = 2; i <= Math.sqrt(number) ; i++) {
                if (number % i === 0) {
                    num = false;
                    break;
                }
            } 
        }
        console.log(`Sayı: ${number} ${num ? 'Evet' : "Hayır"}`)
    }
}

asal(10,20,11)

console.log("--------------Arkadaş Sayılar-----------------")

function divisorTotal(number) {
    let num = 0;
    for(let i =1; i <= number / 2; i++){
        if(number % i === 0){
            num += i;
        }
    }
    return num;
}

function friendNumbers(limit) {
    for (let i = 1; i <= limit; i++) {
        let num1 = divisorTotal(i);
        let num2 = divisorTotal(num1);

        if (i === num2 && i !== num1) {
            console.log(`${i} ve ${num1} arkadaş sayılardır.`)
        }
        
    }
}

friendNumbers(1000)

console.log("--------------Mükemmel Sayılar-----------------")


function divisorTotal2(number) {
    let num = 0;
    for(let i =1; i <= number / 2; i++){
        if(number % i === 0){
            num += i;
        }
    }
    return num;
}

function perfectoNumbers2(limit) {
    for (let i = 1; i <= limit; i++) {
        
        if (i === divisorTotal2(i)) {
            console.log(`${i} Mükemmel sayıdır.`)
        }
        
    }
}


perfectoNumbers2(1000)

console.log("--------------Asal 2-----------------")


function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function listPrimes(limit) {
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            console.log(`${i} asal sayıdır.`);
        }
    }
}

listPrimes(10);



