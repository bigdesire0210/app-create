function Janken() {
    myNumber = document.getElementById('myHand').selectedIndex;
    Gu = document.getElementById('gu');
    Tyoki = document.getElementById('tyoki');
    Pa = document.getElementById('pa');
    cpuNumber = Math.floor(Math.random() * 3);

    Gu = 0;
    Tyoki = 1;
    Pa = 2;

    // let result;

    //グーの定義
    if (cpuNumber == 0) {
        cpuNumber = "グー";
    }
    //チョキの定義
    if (cpuNumber == 1) {
        cpuNumber = "チョキ";
    }
    //パーの定義
    if (cpuNumber == 2) {
        cpuNumber = "パー";
    }

    //勝った時
    if (Gu - cpuNumber == -1) {
        result = "WIN!! おめでとう！";
    }

    if (Tyoki - cpuNumber == -1) {
        result = "WIN!! おめでとう！";
    }

    if (Pa - cpuNumber == 2) {
        result = "WIN!!";
    }

    //あいこの時
    if (Gu - cpuNumber == 0) {
        result = "引き分けだよ、もう一回";
    }

    if (Tyoki - cpuNumber == 0) {
        result = "引き分け";
    }

    if (Pa - cpuNumber == 0) {
        result = "引き分け";
    }

    //負けた時
    if (Gu - cpuNumber == -2) {
        result = "LOSE!!　残念！";
    }

    if (Tyoki - cpuNumber == -1) {
        result = "LOSE!! 残念！";
    }

    if (Pa - cpuNumber == 2) {
        result = "LOSE";
    }

    document.getElementById("message1").innerHTML = "あいての手" + cpuNumber;

    document.getElementById("message2").innerHTML = "結果" + result;

    console.log(result)
}