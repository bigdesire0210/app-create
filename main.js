function FizzBuzz() {
    let input_num = document.getElementById("total").value;
    let int_input_num = parseInt(input_num, 10);
    document.getElementById("now_num").innerHTML = int_input_num;

    one_up.onclick = function () {
        int_input_num += 1;
        total.value = int_input_num;
        now_num.innerHTML = int_input_num;
    }

    one_down.onclick = function () {
        int_input_num += -1;
        total.value = int_input_num;
        now_num.innerHTML = int_input_num;
    }

    if (int_input_num % 15 === 0) {
        alert("FizzBuzz")
    } else if (int_input_num % 3 === 0) {
        alert("Fizz")
    } else if (int_input_num % 5 === 0) {
        alert("Buzz")
    }
    else alert(int_input_num)
}

// function FizzBuzz() {
//     let i;
//     for (i = 1; i <= 100; i++) {
//         if (i % 15 === 0) {
//             console.log("FizzBuzzだってよ！");
//         } else if (i % 3 === 0) {
//             console.log("Fizzだってよ！");
//         } else if (i % 5 === 0) {
//             console.log("Buzzだってよ！")
//         } else console.log("どんまい")
//     }
// }


// let FizBuzz = 0;
// for (FizBuzz = 1; FizBuzz <= 100; FizBuzz++) {
//     if (Fizbuzz % 15 === 0) {
//         alert("FizBuzzだってよ！");
//     } else if (FizBuzz % 3 === 0) {
//         alert("Fizzだってよ！");
//     } else if (FizBuzz % 5 === 0) {
//         alert("Buzzだってよ！");
//     } else alert("どんまい");
// }

