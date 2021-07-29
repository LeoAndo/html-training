document.addEventListener("DOMContentLoaded", function (event) {
    createLinearGradient();
}, false);

// 線型グラデーションの作成.
function createLinearGradient() {
    console.log("IN, createLinearGradient");
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    // グラデーションの作成
    var startX = 0; startY = 0;
    var endX = canvas.width; endY = 0;
    var gradient = context.createLinearGradient(startX, startY, endX, endY);
    var startColorRgb = "#673ab7"; // rgb(255,0,0) こんな書き方もできる！
    var endColorRgb = "#311b92";
    gradient.addColorStop(0, startColorRgb); // 開始地点, 色指定(RGB)
    gradient.addColorStop(1, endColorRgb); // 終了地点, 色指定(RGB)
    context.fillStyle = gradient;
    // 短形を描画
    var rectStartX = 0; rectStartY = 20; // 四角形の左上のx、y座標
    var rectWidth = canvas.width; rectHeight = canvas.height - 20; // 四角形の幅、高さ
    context.fillRect(rectStartX, rectStartY, rectWidth, rectHeight);
}