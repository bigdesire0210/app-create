function fizzbuzz() {
    for (i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else
            console.log(i);
    }
}


//  三項演算子を用いた式
// function fizzBuzz(){
//     for(i=1; i<=100; i++){
//         console.log((i%3 === 0 ? 'Buzz' : '') + (i%5 === 0 ? 'Buzz' : '') || i);
//     }
// }