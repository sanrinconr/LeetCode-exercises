const twoSum = require("./twoSum")

/*Testings*/
negativeBigNumber()


/**Testing with big numbers */
function negativeBigNumber(){
    let bigArray = []
    for(let i = 0 ; i<10000 ; i++){
        if(i === 100){
            bigArray.push(-125465812)
        }else if(i === 9999){
            bigArray.push(125465812)
        }else{
        bigArray.push(getRandomInt(1,10000))
        }
    }
    const result = twoSum(bigArray,0)
    if(result[0] === 100 && result[1]===9999){
        console.log("Passed negativeBigNumber")
        return true
    }
    throw new Error("negativeBigNumber failed")
}



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let a = Math.floor(Math.random() * (max - min + 1)) + min;
    return a
}