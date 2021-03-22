function result(myNumber, cpuNumber) {
    if (
        (myNumber === 0 && cpuNumber === 1) ||
        (myNumber === 1 && cpuNumber === 2) ||
        (myNumber === 2 && cpuNumber === 0)
    ) {
        return "勝利";
    }
    if (myNumber === cpuNumber) {
        return "引き分け";
    }
    return "敗北";
}

function janken() {
    const myNumber = document.getElementById('myHand').selectedIndex;
    const cpuNumber = Math.floor(Math.random() * 3);

    const Gu = 0;
    const Tyoki = 1;
    const Pa = 2;
    const handTxt = {};
    handTxt[Gu] = "グー";
    handTxt[Tyoki] = "チョキ";
    handTxt[Pa] = "パー";

    const resultText = result(myNumber, cpuNumber);

    document.getElementById("message1").innerHTML = 'あいての手' + handTxt[cpuNumber];
    document.getElementById("message2").innerHTML = '結果' + resultText;
}

//　結果を関数化した。勝敗を考える際に、引き算を用いて条件を述べるのではなく、数字を指定してあげることで仮に
//　数字が変わった際にも対応しやすくなっている。
//　数字をキーにしたオブジェクトを作成し、その中に「グー」「チョキ」「パー」の文字列を入れた。
//　