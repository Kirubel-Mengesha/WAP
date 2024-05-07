// Implement an arrow function with feature below:
// concat('hi', [1,2,3], ['Hello','world']) -> return result: ['h', 'i', 1,2,3, 'Hello','world']

const concat = (...args) => {
    return args.reduce((acc, val) => {
        if (typeof val === 'string') {
            acc.push(...val.split(''));
        } else {
            acc.push(...val);
        }
        return acc;
    }, []);
};

console.log(concat('hi', [1, 2, 3], ['Hello', 'world'])); 

