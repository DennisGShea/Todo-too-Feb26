

const myString = 'the quick brown dog jumps over the lazy fox' 

function mostFrequentChar (str) { 
            // obtain list of unique characters in str 
    let stringArray = str.split('')
    let uniqueChars = [... new Set(stringArray)]
console.log (uniqueChars)
// loop through string counting occurence of each unique character of each unique characters 

     let freqChar = ''
     let freqCount = 

    return freqChar   

console.log(mostFrequentChar(myString))

