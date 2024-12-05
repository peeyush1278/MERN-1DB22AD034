function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Found a divisor, not prime
    }
    return true; // No divisors found, it's prime
}

function getFirstNPrimes(n) {
    const primes = [];
    let num = 2; // Start checking for prime from 2
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