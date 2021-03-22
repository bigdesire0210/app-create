function append(S) {
    document.querySelector(" input ").value += S;
}

function update(S) {
    document.querySelector("input").value = S;
}

function math() {
    const result = document.querySelector("input").value;
    // エラー処理も入れる
    try {
        const f = new Function("return " + result);
        update(f().toString());
    } catch (eeror) {
        update(error);　//計算に失敗した時にエラーの内容を表示
    }
}

