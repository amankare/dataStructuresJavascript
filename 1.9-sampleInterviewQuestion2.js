//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter(input){
	let map = {};
	for(let i = 0; i < input.length; i++){
		if(map[input[i]] !== undefined){
			return input[i];
		}
		else{
			map[input[i]] = i;
		}
		//console.log(map); //this is what out hash table looks like
	}
	return undefined 
}

firstRecurringCharacter([2,5,1,2,3,5,1,2,4]);
//O(n) time complexity (brute force solution had O(n^2)
//O(n) space complexity (brute force solution had O(1), this is a tradeoff for faster code)
