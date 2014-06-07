/*
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * 
 * What is the largest prime factor of the number 600851475143 ?
 */

console.log( largestPrimeFactorOf( 600851475143 ) );

function largestPrimeFactorOf( num ) {
	var factors = [], prime,
		primes  = getPrimesUpTo( num );
	
	for ( var i = 0, len = primes.length; i < len; i++ ) {
		prime = primes[ i ];

		if ( num % prime === 0 ) {
			factors.push( prime );
		}
	}

	return factors.pop();
}

function getPrimesUpTo( num ) {
	var primes = [];

	for ( var i = 2; i <= num; i++ ) {
		if ( isPrime( i ) ) {
			primes.push( i );
		}
	}

	return primes;
}

function isPrime( num ) {
	var sqrt = parseInt( Math.sqrt( num ), 10 );

	for ( var i = 2; i <= sqrt; i++ ) {
		if ( num % i === 0 ) {
			return false;
		}
	}

	return true;
}
