function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
    }
    return true; 
}

function getFirstNPrimes(n) {
    const primes = [];
    let num = 2; 
    while (primes.length < n) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }
    return primes;
}

function printSquaresOfPrimes(primes) {
    primes.forEach(prime => {
        console.log(`The square of ${prime} is ${prime * prime}`);
    });
}

const first10Primes = getFirstNPrimes(10);
printSquaresOfPrimes(first10Primes);