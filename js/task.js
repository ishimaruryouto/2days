document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("addTaskButton");

  addButton.addEventListener("click", function (event) {
    event.preventDefault();

    const taskName = document.getElementById("taskName").value;
    const subject = document.getElementById("subject").value;
    const date = document.getElementById("date").value;
    const notification = document.getElementById("notification").value;
    const memo = document.getElementById("memo").value;

    const task = {
      taskName,
      subject,
      date,
      notification,
      memo,
    };

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    window.location.href = "index.html"; // 課題追加後、index.html に戻る
  });
});
