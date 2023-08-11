document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addButton = document.getElementById("addButton");
  const taskList = document.getElementById("taskList");

  addButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText) {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<label>${taskText}</label><button>Delete</button>`;
      taskList.appendChild(listItem);
      taskInput.value = "";
    }
  });

  taskList.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
      const listItem = event.target.closest("li");
      if (listItem) {
        listItem.remove();
      }
    }
  });
});
