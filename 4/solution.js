/* A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 *
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

console.log( largestPalindrome() );

function largestPalindrome() {
	var product, string, reverse;

	var largest = 0;

	for ( var i = 999; i > 99; i-- ) {
		for ( var j = i - 1; j > 99; j-- ) {
			product = j * i;

			string = "" + product;
			reverse = string.split("").reverse().join("");

			if ( string == reverse && product > largest ) {
				largest = product;
			}
		}
	}

	return largest;
}
