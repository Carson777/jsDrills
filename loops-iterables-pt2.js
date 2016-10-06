// PART 0: Write a function called squareDance() that squares each number in an array.
var squareDance = function(inputArray)
{
	var newArray = []
	var placeHolder = 0
	for(var i = 0; i < inputArray.length; i = i +1)
	{
		placeHolder = inputArray[i] * inputArray[i]
		newArray.push(placeHolder)
	}
	return newArray
}
console.assert(squareDance([1, 2])[1] === 4)
console.assert(squareDance([5,10,15])[2] === 225)
console.assert(squareDance([3,6,9,3])[0] === 9)

// PART 1: write a function called nicer(). It should clean up the language in its input sentence.
var nicer = function(inputString)
{
	var filthyArray = inputString.split(" ")
	var cleanString = ""
	for(var i = 0; i < filthyArray.length; i = i + 1)
	{
		if(!(filthyArray[i] === "heck" || filthyArray[i] === "darn" || filthyArray[i] === "crappy" || filthyArray[i] === "dang"))
		{
			cleanString = cleanString + filthyArray[i] + " "
		}
	}
    var cleanerString = cleanString.substring(0, cleanString.length - 1)
	return cleanString
}
console.assert(nicer("mom get the heck in here and bring me a darn sandwich.") === "mom get the in here and bring me a sandwich.")

console.assert(nicer("here son, your crappy sandwich is on the dang plate.") === "here son, your sandwich is on the plate.")

// PART 2: write a function called capitalizeAll(). It should take as input a sentence and capitalize the first letter of every word in the sentence. 
var capitalizeAll = function(inputString)
{
	var tempArray = inputString.split(" ")
    var tempString = ""
	var capString = ""
	var finalString = ""
	for(var i = 0; i < tempArray.length; i = i +1)
	{
        tempString = tempArray[i]
		capString = tempString.substring(0, 1).toUpperCase() + tempString.substring(1,tempString.length)
		finalString = finalString + capString + " "
	}
	finalString = finalString.substring(0, finalString.length -1)
	return finalString
}
console.assert(capitalizeAll('every day is like sunday.') === 'Every Day Is Like Sunday.'))

// PART 3: write a function called properSentences(). It should take as input a string and capitalize the first letter of every sentence in that string. (For our purposes, all sentences will end with periods. Write one that works with ? and ! and receive a gratifying high five, right on the hand!)
var properSentences = function(inputString)
{
	var tempArray = inputString.split(". ")
    var tempString = ""
	var capString = ""
	var finalString = ""
	for(var i = 0; i < tempArray.length; i = i +1)
	{
        tempString = tempArray[i]
		capString = tempString.substring(0, 1).toUpperCase() + tempString.substring(1,tempString.length)
		finalString = finalString + capString + ". "
	}
	finalString = finalString.substring(0, finalString.length -2)
	return finalString
}
var paragraph = 'it was a fine morning. the wine was good. light slanted in through the cafe window.'

console.assert(properSentences(paragraph) === "It was a fine morning. The wine was good. Light slanted in through the cafe window.")

// PART 4: write a function called iPutTheFunIn(). It should take a string as input. The output should be a copy of the original string with the word 'fun' inserted into the center of the string. 
var iPutTheFunIn = function(inputString)
{
	var front = inputString.substring(0,(inputString.length/2))
	var back = inputString.substring((inputString.length/2), inputString.length)
	var final = front + "fun" + back
	return final
}
console.assert(iPutTheFunIn("funerary") === "funefunrary")
console.assert(iPutTheFunIn("reds") === "refunds")

// PART 5: write a function called pipeline(). it should take three inputs: (1) a starting value, (2) a function, and (3) another function. it should use functions (2) and (3) on the starting value, one after the other, and return a new value that has been processed by both function (2) and function (3).

var pipeline = function (inputString, function1, function2)
{
	var firstPass = function1(inputString)
	var secondPass = function2(firstPass)
	return secondPass
}
// the following three tests all correspond to the pipeline() function.

// test 1
var paragraph = 'mom bring your crappy self in here. i want a dang sandwich.'

console.assert(pipeline(paragraph,nicer,properSentences) === "Mom bring your self in here. I want a sandwich.")

// test 2
var squareNum = function(n){
	return n * n
}

var addOne = function(n) {
	return n + 1
}

console.assert(pipeline(7,squareNum,addOne) === 50)

// test 3
var exclaimAll = function(arr) {
	var newArr = []
	for (var i = 0; i < arr.length; i ++) {
		newArr.push(arr[i] + '!')
	}
}

var result = pipeline([10,20,30],squareDance,exclaimAll)
console.assert(result[1] === "400!")
console.assert(result[2] === "900!")
