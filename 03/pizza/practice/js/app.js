let budget = prompt("所持金を数字で入力して下さい");
budget = parseFloat(budget);
if (budget >= 1500) {
    alert("ピザを注文した");
} else if (budget >= 500) {
    alert("ポテトを注文しました");
} else {
    alert("節約、節約・・・");
}