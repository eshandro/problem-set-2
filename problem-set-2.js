// 1

var firstReverse = function(str) {
	var workingList = str.split('');
	var newList = [];
	for (i=workingList.length; i >= 0; i--) {
		newList.push(workingList[i]);
	}
	var reversed = newList.join('');
	return reversed;
}

// 2

var swapCase = function(str) {
	var asIsList = str.split('');
	var lowerCaseList = (str.toLowerCase()).split('');
	var result = [];
	for (i=0; i < asIsList.length; i++) {
		if (asIsList[i] === lowerCaseList[i]) {
			result.push(asIsList[i].toUpperCase());
		}
		else {
			result.push(asIsList[i].toLowerCase());
		}
	}
	return result.join('');	
}

//3 

var letterCount = function(str) {
	var wordsList = str.split(' ');
	var comparedList = [];

	for (i=0; i < wordsList.length; i++) {
		var tempList = wordsList[i].split('');
		var counter = 0;

		for(j=0; j < tempList.length; j++) {

			for(k=tempList.length-1; k>j; k--) {
				if (tempList[j] === tempList[k]) {
					counter ++
				}
			}	
		}
	comparedList.push(counter);	
	}

	var indexOfWord = comparedList.indexOf(Math.max.apply(Math, comparedList));
	return wordsList[indexOfWord];
}
