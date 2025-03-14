const dates = document.querySelectorAll(".date");

// クリックイベントを追加
dates.forEach((date) => {
  date.addEventListener("click", function () {
    // 既に選択されている要素の選択状態を解除
    dates.forEach((d) => d.classList.remove("selected"));

    // クリックした要素に選択クラスを追加
    this.classList.add("selected");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const calendarDays = document.querySelectorAll(".date"); // カレンダーのすべての日付要素を取得

  tasks.forEach((task) => {
    const dueDate = new Date(task.date);
    const day = dueDate.getDate();

    calendarDays.forEach((dayElement) => {
      if (parseInt(dayElement.innerText) === day) {
        // 日付が一致する場合
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task-item");
        taskDiv.innerHTML = `<p>${task.taskName}</p>`;
        taskDiv.style.backgroundColor = "#FF6868"; // 赤系の背景色
        taskDiv.style.color = "#fff";
        taskDiv.style.padding = "0";
        taskDiv.style.borderRadius = "5px";
        taskDiv.style.fontSize = "1rem";
        taskDiv.style.marginTop = "40px";
        taskDiv.style.height = "20px";
        taskDiv.style.width = "50px";
        taskDiv.style.dayElement.appendChild(taskDiv); // カレンダーの日付内に課題を追加
      }
    });
  });
});
