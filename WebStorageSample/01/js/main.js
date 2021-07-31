var textarea;
const ITEM_MEMO_KEY = "memo";

// 初期表示時にメモを読み込む
window.onload = function () {
    console.log("onload");
    textarea = document.getElementById("textarea");
    textarea.focus();
    loadMemo();
}

// メモを読み込む
function loadMemo() {
    console.log("loadMemo");
    var memo = localStorage.getItem(ITEM_MEMO_KEY); // 初期値はnull
    console.log(memo);
    if (memo != null) {
        textarea.value = memo;
    }
}

// メモを保存する
function saveMemo() {
    console.log("saveMemo");
    localStorage.setItem(ITEM_MEMO_KEY, textarea.value);
    alert("保存しました！");
}