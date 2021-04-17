/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let max = 0;
    for(let i = 0 ; i<s.length ; i++){
        let coincidence = getCoincidenceFrom(s,i)
        let len =  1+coincidence[1] - coincidence[0]
        if(len > max){
            max = len;
        }
    }
    return max

	
};

function getCoincidenceFrom(string,start){
    let used = []
    for(let i = start ; i<string.length ;){
        if(!used.includes(string[i])){
            used.push(string[i])
        }else{
            return [start,i-1]
        }
        i++
    }
    return [start, string.length-1]
}

module.exports = lengthOfLongestSubstring