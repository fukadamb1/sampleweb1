"use strict";

window.addEventListener("DOMContentLoaded",
  function() {
    // ページ本体が読み込まれたタイミングで実行するコード

    const item = document.querySelectorAll(".item"); // icon
    const itemArray = Array.from(item); // Arrayに変換
    itemArray.forEach(function(element, index) {
      // 0.2s毎にずれて表示
      setTimeout(function () {
          element.classList.remove("opacity");
          element.classList.add("fade-in");
        }, 200 * index);
    });
    
  }, false

);