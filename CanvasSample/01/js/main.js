window.addEventListener("load", translateCanvas, false);

// translate Canvas.
function translateCanvas() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    // 描画処理
    var x = canvas.width / 2; // 水平方向の移動距離
    var y = canvas.height / 2; // 垂直方向の移動距離
    context.translate(x, y); // 中心点を移動させる.(中央に移動する)
    // 36本の線を回転させて描画する
    console.log(Math.PI);
    for (var i = 0; i < 36; i++) {
        context.save();
        // 回転
        var r = (i * 10) * Math.PI / 180;
        console.log(r);
        context.transform(Math.cos(r), Math.sin(r), -Math.sin(r), Math.cos(r), 0, 0);
        // 細長い長方形を描画
        context.fillStyle = "#673ab7";
        context.beginPath();
        context.rect(0, 0, 150, 3);
        context.fill();
        context.restore();
    }
}