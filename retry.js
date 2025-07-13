const inVal = document.getElementsByClassName("inP")[0];
const taskList = document.getElementsByClassName("list")[0];
function addTask(){
    if(inVal.value===''){
        alert("Task should not be empty, enter some texts.")
    } 
    else{
        let newTask = document.createElement("li");
        newTask.innerHTML = inVal.value;
        taskList.appendChild(newTask);
        save();
        let delTask = document.createElement("span");
        delTask.innerHTML = "\u00d7";
        delTask.title ="Delete task?";
        newTask.appendChild(delTask);

        inVal.value = '';
        save();
    }
}
taskList.addEventListener("click", function(a){
    if(a.target.tagName ==="LI"){
        a.target.classList.toggle("check");
        save();
    } else if(a.target.tagName ==="SPAN"){
        a.target.parentElement.remove();
        save()
    }
}, false)

function save(){
    localStorage.setItem("data", taskList.innerHTML);
}
function show(){
    taskList.innerHTML = localStorage.getItem("data")
}