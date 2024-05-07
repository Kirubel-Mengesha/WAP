function printNumbers(from, to) {
    let current = from;
    const intervalId = setInterval(() => {
        console.log(current);
        if (current === to) {
            clearInterval(intervalId);
        }
        current++;
    }, 1000);
}
printNumbers(1, 5); // Prints numbers from 1 to 5 with a one-second delay
