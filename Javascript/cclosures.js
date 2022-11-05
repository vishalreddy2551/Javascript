// function outerFunction() {
//     var a = 7;
//     function innerFunction() {
//         console.log('value of a::', a);
//     }
//     innerFunction()
// }
// outerFunction()
// // Console:: 7

// function outerFunction() {
//     var a = 7;
//     function innerFunction() {
//         console.log('value of a::', a);
//     }
//     return innerFunction
// }
// const func = outerFunction()
// func();

// function outerFunction() {
//     var a = 7;
//     function innerFunction() {
//         return a;
//     }
//     return innerFunction
// }
// const func = outerFunction()
// console.log(func());


function outerFunction() {
    var a = 7;
    return function innerFunction() {
        return a;
    }
}
const func = outerFunction()
console.log(func());


// function makeAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// const add5 = makeAdder(5);
// const add10 = makeAdder(10);

// console.log(add5(2)); // 7
// console.log(add10(2)); // 12

// Self-invoking function
// Anonym
