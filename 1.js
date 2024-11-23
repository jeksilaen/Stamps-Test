// Please create an array/list of numbers from 1 to 100. Print all these numbers in reverse order, but with the following rules :
// 1. Do not print prime numbers.
// 2. Replace numbers divisible by 3 with the text "Foo."
// 3. Replace numbers divisible by 5 with the text "Bar."
// 4. Replace numbers divisible by both 3 and 5 with the text "FooBar."
// 5. Print the numbers horizontally, not vertically.

// array initiation
arr = []
for (let i = 1; i < 101; i++) {
    arr.push(i)
}

// print in reverse + other constraints
result = ''
for (let i in arr.reverse()) {
    if (!isPrime(arr[i])){
        result += foobar(arr[i]) + ' '
    }
}

console.log(result);


// functions
function isPrime(num) {
    if (num <= 1) return false;
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function foobar(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "FooBar"
    }
    else if (num % 3 === 0) {
        return "Foo"
    }
    else if (num % 5 === 0) {
        return "Bar"
    }
    else{
        return num
    }
}


