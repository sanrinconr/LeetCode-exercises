/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let dict = {
        "{":"}",
        "[":"]",
        "(":")"
    }
    let stack = []
    if(s.length === 1) return false
    for(let i = 0 ; i<s.length; i++){
        if(s[i] === "{" || s[i]==="(" || s[i]==="["){
            stack.push(s[i])
        }else if(s[i] === "]" || s[i]===")" || s[i]==="}"){
            if(dict[stack.pop()] !== s[i]){
                return false
            }
        }
    }
    if(stack.pop()){
        return false
    }
    return true
};

module.exports = isValid