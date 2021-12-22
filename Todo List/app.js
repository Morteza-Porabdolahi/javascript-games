var input = document.getElementById("userInput");
var btn = document.getElementById("enter");
var ul = document.getElementById("list");
function inputVlidate() {
    return input.value.length;
}
function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    function crossOut() {
        li.classList.toggle("done");
    }
    li.addEventListener("click", crossOut);
    var dBtn = document.createElement("button");
    dBtn.classList.add("btn")
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem)
    function deleteListItem() {
        li.classList.add("delete");
    }
}

function addListAfterClick() {
    if (inputVlidate() > 0) {
        createListElement();
    }
}
function addListAfterKeyPress(event) {
    if (inputVlidate() > 0 && event.which === 13) {
        createListElement();
    }
}
btn.addEventListener("click", addListAfterClick)
input.addEventListener("keypress", addListAfterKeyPress)