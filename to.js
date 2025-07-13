const inB = document.getElementsByClassName("inP")[0];
const List = document.getElementsByClassName("list")[0];
        function btnClick(){
            if(inB.value === ''){
                alert("Please enter a value");
            } else {
                let item = document.createElement("li");
                item.innerHTML = inB.value;
                List.appendChild(item);

                let del = document.createElement("span");
                del.innerHTML = "\u00d7";
                del.title = "Remove task"
                item.appendChild(del);

                // Optional: Clear the input field after adding the item
                inB.value = '';
                saveDate();
            }
        }
        List.addEventListener("click", function(a){
            if(a.target.tagName === "LI"){
                a.target.classList.toggle("check");
                saveDate();
            } else if(a.target.tagName === "SPAN"){
                a.target.parentElement.remove();
                saveDate();
            }
        }, false)
        function saveDate(){
            localStorage.setItem("data", List.innerHTML);
        }
        function showDate(){
            List.innerHTML = localStorage.getItem("data");
        }
        