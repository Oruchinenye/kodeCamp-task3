//function isPalindrome (str) {
    //let pal = "it is a Palindrome";
   // for (let i = str.length; i <= 0; i--) {
       // pal += str[i];
    //}
   // if (pal == str) {
     //   return true;
   // } else {
       // return false;
    //}
//}

//let str1 = "Level";
//let str2 = "Nitin";
//console.log(isPalindrome (str1));
//console.log(isPalindrome (str2));

function isPalindrome(str) {
    str =   String(str).toLowerCase();
   let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
   }
    if (str === reversedString) {
        return str + " " + "is a palindrome";
   }
   else{
        return str + " "+ "is not a palindrome";
   }
}

let str1 = "Level";
let str2 = "Energy";
console.log(isPalindrome (str1));
console.log(isPalindrome (str2));

