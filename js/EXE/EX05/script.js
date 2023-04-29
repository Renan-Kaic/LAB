/*const max = (n1, n2) => n1 > n2 ? n1 : n2
console.log(max(10, 10));*/


/*const modo = (l, a) => {
    return l > a
}

console.log(modo(1000, 200));*/

function fizzBuzz(n) {
    if (typeof n !== 'number') return n
    else if (n % 3 === 0 && n % 5 === 0) return 'FizzBuz'
    if (n % 3 === 0 && n % 5 != 0 ) return 'Fizz'    
    else if (n % 5 === 0 && n % 3 != 0) return 'Buzz'
    
    return n
}

for (let i = 0; i < 100; i++) {
    console.log(fizzBuzz(i));
}