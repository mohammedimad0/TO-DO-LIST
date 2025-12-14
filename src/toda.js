const input_box = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function ADD() {
  if (input_box.value === "") {
    alert("NO INPUT FOUND");
  } else {
    let li = document.createElement("li");
    li.textContent = input_box.value;
    listcontainer.appendChild(li);
    let span = document.createElement('span')
    span.innerHTML="\u00d7";
    li.appendChild(span);
  }
  input_box.value = ""; 
  saveData();
}

listcontainer.addEventListener('click',function(e){
  if(e.target.tagName=== "LI"){
    e.target.classList.toggle("checked");
    saveData();

  }
  else if(e.target.tagName==='SPAN'){
    e.target.parentElement.remove();
    saveData();
  }
},false);

function saveData(){
  localStorage.setItem("data",listcontainer.innerHTML);
  

}
function show(){
  listcontainer.innerHTML=localStorage.getItem("data");
}
show();