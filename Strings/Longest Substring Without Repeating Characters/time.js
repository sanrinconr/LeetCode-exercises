const lengthOfLongestSubstring = require("./longestString")

//I have de doubt if the complexity is n or n^2, and i resolved is n
//See the graph! , https://docs.google.com/spreadsheets/d/13gm02irsNn18-IcsswgDPfx7mkAc9GHHf4ZVkz_pyfg/edit?usp=sharing

function getTime(n){
    let entry =  makeid(n)
    var start = Date.now();
 
    lengthOfLongestSubstring(entry)
    var end = Date.now();
 
    console.log(`${end - start }ms`);

    function makeid(length) {
        var result           = [];
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result.push(characters.charAt(Math.floor(Math.random() * 
            charactersLength)));
        }
        return result
    }
}

getTime(10000)