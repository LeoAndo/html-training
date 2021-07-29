window.addEventListener("load", function () {
    createRadialGradient();
}, false);

// 円形グラデーションの作成
function createRadialGradient() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    // グラデーションの作成
    var x1 = 150; y1 = 150, r1 = 50; // 1つ目の円形: 座標(x, y)を中心とした r: 半径の円
    var x2 = 150; y2 = 150, r2 = 100;// 2つ目の円形
    var gradient = context.createRadialGradient(x1, y1, r1, x2, y2, r2);
    gradient.addColorStop(0.3, "#0d47a1"); // 地点, 色指定(RGB)
    gradient.addColorStop(0.7, "#2196f3");
    gradient.addColorStop(1.0, "#e3f2fd");
    context.fillStyle = gradient;
    // 四角形の作成
    var rectStartX = 0; rectStartY = 0; // 四角形の左上のx、y座標
    var rectWidth = 300; rectHeight = 300; // 四角形の幅、高さ
    context.fillRect(rectStartX, rectStartY, rectWidth, rectHeight);
}