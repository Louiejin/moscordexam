
/**
 * can run on terminal
 * node .\JavascriptCodingChallenge3.js
 */
function countWords(sentence){
    return sentence.match(/\s*(\w+)\s*/g).length; 
}
let sentence = 'A quick brown fox jumps over the lazy dog';
console.log(countWords(sentence));
