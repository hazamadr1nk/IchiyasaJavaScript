let name = prompt("名前を入力してください");

function greet(name = "ナナシさん") 
{
    let message = "こんにちは";
    alert(message + name);
    return;
}

greet();
greet("太郎さん");

console.log(message);
