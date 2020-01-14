/**
 * can run on terminal
 * node .\JavascriptCodingChallenge4.js
 */

function calculateValidationNumber(input){
    let num = BigInt(input).toString().split("").reduce((a,c)=>{
        return Number(a) + Number(c);
    });
    return Math.ceil(Math.log10(num+1)) == 1 ? num : calculateValidationNumber(num) ;
}
console.log(calculateValidationNumber(444444));
console.log(calculateValidationNumber(1234));
console.log(calculateValidationNumber(23478998));
