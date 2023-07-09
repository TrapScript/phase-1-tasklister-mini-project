document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const input = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function(event) {
   /event.preventDefault();

    const task = input.value;

    const listItem = document.createElement("li");
    listItem.textContent = task;

    taskList.appendChild(listItem);
    input.value = "";

 }
 function addTAsk(){
    if(inputBox.value === ''){
      alert("write something");
    }
    else{
      let li =document.createElement("li");
      li.innerHTML = inputBox.value;
      listContainer.appendChild(li);
    }
 }

});
