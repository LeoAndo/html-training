// sosu-worker.js -- 素数を計算してメッセージを送信
var count = 0;
for (var n = 2; n <= 1000000; n++) {
  var is_prime = true;
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      is_prime = false;
      break;
    }
  }
  if (is_prime) {
    count++;
    postMessage("発見:" + count + "個:" + n);
  }
}
postMessage("100万以下の素数は、"+count+"個ありました。");
