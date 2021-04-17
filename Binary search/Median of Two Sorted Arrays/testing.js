const findMedium = require("./mediaToArrays")


//Test with 1000 elements
console.log(findMedium(generateOrderedArray(1000,3), generateOrderedArray(1000,2)) === 1200)


function generateOrderedArray(n, multiples){
    n = multiples*n
    let out = []
    for(let i = multiples; i<n ; i=i+multiples){
        out.push(i)
    }
    return out
}