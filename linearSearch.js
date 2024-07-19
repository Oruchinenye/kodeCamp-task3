function linearSearch(arr, string) {
  // Go through all the elements of arr to look for item.
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === string) {
        // Found it!
        return "Yes, string exist in the array";
    } 
        
  } 
  
  // string not found in the array.
  return "No, string does not exist in the array";
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["Level", "Transfer", "Heat", "Book"];
console.log(linearSearch(arr2));



