const buttonsOpen = document.querySelectorAll(".modalOpen"); // 全てのモーダル開ボタンを取得
const modals = document.querySelectorAll(".modal"); // 全てのモーダルを取得
const body = document.querySelector("body");

// ボタンがクリックされた時
dates.forEach((date) => {
  date.addEventListener("click", function () {
    const modalId = "modal1"; // ここで開きたいモーダルのIDを指定
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = "block";
      body.classList.add("open");
    }
  });
});
// 各モーダルに閉じる処理を設定
modals.forEach((modal) => {
  const buttonClose = modal.querySelector(".close"); // モーダル内の閉じるボタンを取得
  const modalContent = modal.querySelector(".modal-content"); // モーダル内のコンテンツを取得

  // モーダルコンテンツ以外がクリックされた時
  modal.addEventListener("click", function () {
    modal.style.display = "none";
    body.classList.remove("open");
  });

  // モーダル内のコンテンツがクリックされた場合、閉じないようにする
  modalContent.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});

// モーダルを開いた時にスクロールさせない
document.addEventListener("DOMContentLoaded", function () {
  var openButton = document.querySelector(".modalOpen");
  var closeButton = document.querySelector(".close");
  var modal = document.querySelector(".modal");

  openButton.addEventListener("click", function () {
    document.body.style.overflowY = "hidden";
    modal.style.display = "flex";
  });

  //   closeButton.addEventListener("click", function () {
  //     modal.style.display = "none";
  //     document.body.style.overflowY = "auto";
  //   });

  modal.addEventListener("click", function () {
    modal.style.display = "none";
    document.body.style.overflowY = "auto";
  });
});
