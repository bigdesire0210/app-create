function append(S) {　　//数字ボタンが押されるとその数字を後ろに追加
    document.querySelector(" input ").value += S;
}

function update(S) {　// inputタグを更新
    document.querySelector("input").value = S;
}

function math() { //[=]ボタンが押されると計算
    const result = document.querySelector("input").value;
    // エラー処理も入れる
    try {
        const f = new Function("return " + result);
        update(f().toString());
    } catch (error) {
        update(error);　//計算に失敗した時にエラーの内容を表示
    }
}

