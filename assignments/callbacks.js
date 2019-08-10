// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

 

  //Given this problem: 
  
  // function firstItem(arr, cb) {
  //   // firstItem passes the first item of the given array to the callback function.
  // }

  // Potential Solution:

 // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });




function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length)
}

getLength(items, function(long){
  console.log(long)
}
);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1])
}

last(items, function(final){
  console.log(final)
});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y)
}

sumNums(5, 2, function(seven){
  console.log(seven)
});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
    return cb(x * y)
}

multiplyNums(8, 4, function(thirtyTwo){
  console.log(thirtyTwo)
});

/*function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.ff
  return cb(list.includes(item));
  console.log(list.includes(item))
  if(list.includes(item)){
    console.log("Yes")
    cb("It is there!");
  }else{
    console.log("No")
  }
}*/
function contains(item, list, cb){
  return cb(list.includes(item));
}

contains("yo-yo", items, function (flag){
  console.log(flag)
  if(flag){
    console.log("It's there!")
  }else{
    console.log("It's not there!")
  }
})

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
