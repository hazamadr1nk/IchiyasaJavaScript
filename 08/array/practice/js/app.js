// おみくじの結果データを作成
results = ["大吉","吉","中吉","小吉","凶"];

// 配列[results]をコンソールに表示
console.log(results);

// インデックスが「0」の要素をコンソールに表示
console.log(results[0]);

// 配列に所属するデータをfor文で全て表示する
for (let i=0; i < results.length; i++) 
{
    console.log("index:" + i + "データ:" + results[i]);
}