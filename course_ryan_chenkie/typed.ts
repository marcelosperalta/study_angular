// typescript:

function multiply2(x: number, y: number) {
    return x * y;
}
// console.log(multiply('bob', 3)); // error
console.log(multiply2(2, 3));

let person: string;
// person = 4; // error
person = "bob";