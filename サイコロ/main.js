// Saikoro = new Array("rittai1.png", "rittai2.png", "rittai3.png",
//     "rittai4.png", "rittai5.png", "rittai6.png", "rittai0.gif");

Saikoro = [];

function getDice1() {
    const change = Math.floor(Math.random() * 6);
    const number = change + 1;
    document.getElementById("innerDice").innerHTML =
        '<img src="./illust/rittai' + number + '.png" width="400">';
}



function change(t) {


    if (t.id == "start") {
        Saikoro.push(setInterval(getDice1, 50));
        console.log(Saikoro);
    }

    if (t.id == "stop") {
        console.log(Saikoro);
        clearInterval(Saikoro.shift());
    }
    // random = Math.random() * 6;
    // Change = Math.floor(random) + 1;
    // document.saikoro.src = Saikoro[Change];
} 