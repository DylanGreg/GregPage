const checkBox = document.getElementById("checkbox");
const body = document.body;
function checkBoxChange(){
    let checked = checkbox.checked;

    if(checked){
        body.style.backgroundColor = "red";
    }
    else {
        body.style.backgroundColor = "lightgreen";
    }
}