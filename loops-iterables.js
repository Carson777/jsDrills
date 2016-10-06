/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */

var sumOfArray = function(inputArray){
    var counter = 0
    for (var index = 0; index < inputArray.length; index = index + 1)
    {
		counter = counter + inputArray[index]
	}
	return counter
}


console.assert(sumOfArray([1, 2]) === 3);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3]) === 6);
console.assert(sumOfArray([10, 9, 8]) === 27);

// PART 1

// Write a function maxOfArray() that takes an array of
// numbers as an argument and finds the highest number.

var maxOfArray = function(inputArray){
	var currentMax = 0
	for(var i = 0; i < inputArray.length; i = i +1)
	{
		if(inputArray[i] > currentMax)
		{
			currentMax = inputArray[i]
		}
	}
	return currentMax
}

console.assert(maxOfArray([2,4,3]) === 4)
console.assert(maxOfArray([10,9,8,100,7,6]) === 100)
console.assert(isNaN(maxOfArray([1,2,'bucklemyshoe'])))

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

function isVowel(symbol){
	var vowels = ['a','A','e','E', 'i', 'I', 'o', 'O', 'u', 'U']
    for(var i = 0; i < vowels.length; i = i + 1)
    {
    	if(symbol === vowels[i])
    	{
    		return true
    	}
    }
    return false
}

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * Part 3
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */
var reverse = function(inputString)
{
   
	var answer = ""
	for(var i = inputString.length - 1; i > -1; i = i - 1)
	{
		answer = answer + inputString[i]
        log(answer)
	}
	return answer
}

console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")


/**
 * Part 4
 *
 * write a function the returns a FizzBuzz string for some number N (counting up from 1).
 * - for every number that isn't a multiple of 3 or 5, return a period "."
 * - for every number that is a multiple of 3 (but not 5), return "fizz"
 * - for every number that is a multiple of 5 (but not 3), return "buzz"
 * - for every number that is a multiple of 3 and 5, return "fizzbuzz"
 */
var fizzbuzz = function(N)
{ 
	var answer = ""
	for(var i = 1; i <= N; i = i + 1)
	{
        log(i)
		if(!(i % 3 === 0) && !(i % 5 === !0)){
			answer = answer + "."
		}
		if(i % 3 === 0)
		{
			answer = answer + "fizz"
		}
		if(i % 5 === 0)
		{
			answer = answer + "buzz"
		}
		if(i % 3 === 0 && i % 5 === 0)
		{
			answer = answer + "fizzbuzz"
		}
        
	}
	return answer
}

console.assert(fizzbuzz(1) === ".")
console.assert(fizzbuzz(2) === "..")
console.assert(fizzbuzz(3) === "..fizz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes a string of 
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */

function findLongestWord(sentence){
    var sentenceArray = sentence.split(' ')
    var currentMax = ""
    for(var i = 0; i < sentenceArray.length; i = i + 1)
    {
    	if(sentenceArray[i].length > currentMax.length)
    	{
    		currentMax = sentenceArray[i]
    	}
    }
    return currentMax
}

console.assert(findLongestWord("a book full of dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")



/**
 * PART 6
 *
 * write a function that returns the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */
var GCD = function(input1,input2)
{
	for(var i = 0; i = 10; i = i +1)
	{
		if(input1 % i === 0 && input2 % i ===0)
		{
			return i
		}
	}
}


console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);
