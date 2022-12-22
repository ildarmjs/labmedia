//[7] Split The Bill https://www.codewars.com/kata/5641275f07335295f10000d0
function splitTheBill(x) {
	let average = 0
	let count = 0
	for (key in x) {
		average += x[key]
		count++
	}
	average = average / count
	for (key in x) {
		x[key] = Math.round((x[key] - average) * 100) / 100
	}
	return x
}

//[7] Highest and Lowest https://www.codewars.com/kata/554b4ac871d6813a03000035
function highAndLow(numbers) {
	numbers = numbers.split(' ')
	return Math.max(...numbers) + ' ' + Math.min(...numbers)
}

//[6] Find the odd int https://www.codewars.com/kata/54da5a58ea159efa38000836
function findOdd(A) {
	return A.find(item => A.filter(el => el == item).length % 2)
}

// [6] Who likes it? https://www.codewars.com/kata/5266876b8f4bf2da9b000362
function likes(names) {
	if (names.length == 0) {
		return 'no one likes this'
	} else if (names.length == 1) {
		return names[0] + ' likes this'
	} else if (names.length == 2) {
		return names[0] + ' and ' + names[1] + ' like this'
	} else if (names.length == 3) {
		return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'
	} else {
		return (
			names[0] +
			', ' +
			names[1] +
			' and ' +
			(names.length - 2) +
			' others like this'
		)
	}
}
