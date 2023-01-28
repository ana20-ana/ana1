const toDoList = [];
const tittleTodoList = [];
const $input = document.getElementsByTagName("input")[0];
const $button = document.getElementsByTagName("button")[0];
const $ul = document.getElementsByTagName("ul")[0];

var id = toDoList.length + 1;

$button.addEventListener("click", addTodoItem);

function addTodoItem() {

  let newInput = $input.value;

  if (validateInput(newInput)) {
    //
    if (!tittleTodoList.includes($input.value)) {
      let newItem = new Object();
      newItem.id = id;
      id++;
      newItem.title = $input.value; 
      toDoList.push(newItem);
      tittleTodoList.push(newItem.title);
      $input.value = null;
      renderTodoList();
      console.log(tittleTodoList);
    } else {
      console.log("its similar element");
    }
    } 
    else {
    console.log("The input must be filled");
    }
}

function deleteTodoItem(id) {
  deleteTodoItemFromtoDoList(id);
  renderTodoList();
}

function renderTodoList() {
  $ul.innerHTML = null;

  toDoList.forEach((item) => {


    let li = document.createElement ("li");
    li.innerHTML = item.title + " ID: " + item.id + " - ";
    let delButton = document.createElement ("button");
    delButton.innerHTML = "Delete";
    delButton.addEventListener ("click", () => {

      deleteTodoItem(item.id);
    });
    li.appendChild(delButton);
    $ul.appendChild(li);
  });
}

function deleteTodoItemFromtoDoList(id) {

  let item = toDoList.find((value) => value.id === id);

  toDoList.splice(toDoList.indexOf(item), 1);
}

function validateInput(value) {

  if (value !== "") {
    return true;
  } else {
    return false;
  }
}

renderTodoList();