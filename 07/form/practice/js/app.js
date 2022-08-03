// プログラムで使用する変数の設定
// フォームの要素を取得
let button = document.getElementById("button");
let form = document.getElementById("form");
let textarea = document.getElementById("textarea");

//　文字数制限
let maxTextNum = textarea.getAttribute("maxlength");

// 要素の追加
// 残り文字数を表示する要素の追加
let textMessage = document.createElement("div");
let parent = textarea.parentElement;
parent.insertBefore(textMessage, textarea);

// イベント処理
//　お問い合わせボタンを押したとき
button.addEventListener("click", function()
{
    //　フォームを表示
    form.style.display = "block";
})

// テキストエリアでキーをタイプしたとき
textarea.addEventListener("keyup", function() 
{
    let currentTextNum = textarea.value.length;
    textMessage.innerHTML = "<p>あと「" + (maxTextNum - currentTextNum) + "」文字入力できます。</p>"
});