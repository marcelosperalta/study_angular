// typescript:

function multiply2(x: number, y: number) {
    return x * y;
}
// multiply('bob', 3); // error
multiply2(2, 3);

let person: string;
// person = 4; // error
person = "bob";