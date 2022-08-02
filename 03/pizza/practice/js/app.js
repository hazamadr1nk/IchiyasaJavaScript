let budget = prompt("所持金を数字で入力して下さい");
budget = parseFloat(budget);

let isHungry = confirm("お腹は空いていますか？");

if (budget >= 1500 && isHungry) {
    alert("ピザを注文した");
} else if (budget >= 500) {
    alert("ポテトを注文しました");
} else {
    alert("節約、節約・・・");
}