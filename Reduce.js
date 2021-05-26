
// extractValue

function extractValue(arr, key){
    return arr.reduce(function(acc,next){
        acc.push(next[key]);
        return acc;
    },[]);
}

// owelCount
function vowelCount(str){
    const vowels = "aeiou";
    return str.split('').reduce(function(acc,next){
        let lowerCased = next.toLowerCase()
        if(vowels.indexOf(lowerCased) !== -1){
            if(acc[lowerCased]){
                acc[lowerCased]++;
            } else {
                acc[lowerCased] = 1;
            }
        }
        return acc;
    }, {});
}

// addKeyAndValue
function addKeyAndValue(arr, key, value){
    return arr.reduce(function(acc,next,idx){
        acc[idx][key] = value;
        return acc;
    },arr);
}

// partition
function partition(arr, cb){
    return arr.reduce(function(acc,next){
        if(cb(next)){
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    }, [[],[]]);
}


// ========================== //
let evens = [2,4,6,8,10];

evens.reduce(function(accumulator, nextValue){
    // console.log(accumulator)
  let x = accumulator + nextValue;
  console.log(x)
  return x
  
});

const midtermScores = [ 70, 88, 93, 94, 64, 62, 56 ];
const finalsScores = [ 92, 93, 76, 77, 78, 59, 61 ];
const minScore = midtermScores.reduce(function(min, nextScore) {
	console.log (min, nextScore)
    if (nextScore < min) {
		return nextScore;
	}
    
	return min;
});