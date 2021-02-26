



//#2

console.log("challenge #2")
let  array1 = ['Aloha','Hi', 'hawaiiIslandddd', 'a', 'Hello','E']
let array2 = ['jersey']

console.log(array1)
let longest_element = array1.pop()
console.log(longest_element)

console.log('did we get here???????', longest_element)
console.log(longest_element.length)

let initialLength = array1.length + 1

console.log(array1, "longest=",longest_element)

function longest_string (InputArray, longest_element) {
    if (InputArray.length <= 1) {longest_element = InputArray[1]} else {

    for (let i = 0; InputArray.length != 2 ; i++) {
        new_string = InputArray.pop()
        if (longest_element.length > new_string.length) {
            longest_element = new_string;
            console.log(longest_element)
            return longest_element
        } 
     
    }

}
}
    
longest_string (array1, longest_element)
console.log("final_longest_string=", longest_element, array1 )