let input=document.getElementById("text-box");
let checkbox=document.getElementById("check");
 
function addTask(){
    if(input.value=== ''){
        alert("You must write something!");
    }else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        checkbox.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input.value="";
    saveData();
}
checkbox.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",checkbox.innerHTML);
};

function showTask (){
     checkbox.innerHTML=localStorage.getItem("data");
};
showTask();