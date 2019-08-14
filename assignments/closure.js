// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function myOwnCreation(){
  const say = "Jake the Great";
  console.log(`${say}`);
  function myNextCreation(){
    console.log(`You know who is great? That's right ${say}`);
    function myLastCreation(){
      console.log(`I'm saying this under duress and it is a lie, ${say}`);
    }
    myLastCreation();
  }
  myNextCreation();
}
myOwnCreation();


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
