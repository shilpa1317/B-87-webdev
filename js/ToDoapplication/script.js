tasks=["Attend Sessions"]
function renderTasks(){
    document.getElementById("tasksul").innerHTML
}

function addNewTask(){
    inputElement = document.getElementById("inputToDo")
    newToDo =inputElement.value
    tasks.push(newToDo)

}
renderTasks()