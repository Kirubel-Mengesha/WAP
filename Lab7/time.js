let i = 0;

setTimeout(() => console.log(i), 100); // ?

// assume that the time to execute this function is >100ms

for(let j = 0; j < 100000000; j++) {

  i++;

}

/*
When will the scheduled function run?
      After the loop. because javascript is single-threaded and runs tasks in an event loop, 
      the setTimeout function will not interrupt the execution of the loop.
      Regarding the console.log statement, it will show the value of i after the loop has finished executing, 
      which will be the final value of i after incrementing it within the loop.
What is console.log going to show?
    It will show the final value of i after the loop has finished executing.
*/