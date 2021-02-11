var output = [];
var count = 1;

function fizzBuzz() {
  
 while(count <= 100) { //added a while loop to automate process

if (count % 3 === 0 && count % 5 === 0) {
  output.push("FizzBuzz"); //if divisible by 3 and 5 then push FizZBuzz.
}

else if (count % 3 === 0) {
  output.push("Fizz"); //if divisible by 3 then push Fizz.
  } 
  else if (count % 5 === 0) { //if divisible by 5 then push Buzz.
    output.push("Buzz");
  } 
  else {
    output.push(count);
  }

count++; // adds plus one to the extra number that was added to the array.
 }
   
  console.log(output);
}


