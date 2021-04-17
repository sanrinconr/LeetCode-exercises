
const lengthOfLongestSubstring = require("./longestString")

maxString()
console.log(lengthOfLongestSubstring("dvd") === 2)
console.log(lengthOfLongestSubstring("aaaa") === 1)
console.log(lengthOfLongestSubstring("dvdf") === 3)
console.log(lengthOfLongestSubstring("aab") === 2)
console.log(lengthOfLongestSubstring("bba") === 2)
console.log(lengthOfLongestSubstring("") === 0)
console.log(lengthOfLongestSubstring("dvdf") === 3)
console.log(lengthOfLongestSubstring("anviaja") === 5)

function maxString(){
    const str = makeid(5*(10**4))

    function makeid(length) {
        var result           = [];
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
        if(i>10 && i<13){
            result.push(characters.charAt(Math.floor(Math.random() * 
            charactersLength)));
        }else{
        result.push("a");
        }
    }
    const string = result.join('');
    if(lengthOfLongestSubstring(string) === 3){
        console.log(true)
        return true
    }
    console.log(false)
    return false
}
}

