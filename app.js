// selector function

const select = (element) => {
  return document.querySelector(element);
};

// selected element
const add = select("#add");
const clear = select("#clear");
const output = select(".output");
const input = select("#inp");

// main functions

// this function creates a list element and other element nested to it

const addTodo = () => {
  let inputValue = input.value;
  let alert = select(".alert");

  if (inputValue.length === 0) {
    // if input value is less than three then this will show alert
    alert.style.color = "#b30000";
    alert.style.textalign = "center";
    alert.style.height = "1rem";
    alert.innerText = "input box must not be Empty";
    alert.style.transition = "0.25s ease-in-out";
  } else {
    alert.style.transition = "0.25s ease-in-out";
    alert.innerText = "";
    // create li element and appent that to ul element
    let li = document.createElement("li");
    output.appendChild(li);

    // create p element that contains input value
    let para = document.createElement("p");
    li.appendChild(para);
    para.innerText = inputValue;

    // create done buttons and add ids to it
    let btn1 = document.createElement("button");
    li.appendChild(btn1);
    btn1.setAttribute("id", "done");
    btn1.innerText = "done";
    btn1.addEventListener("click", complete);

    // create delete buttons and add ids to it
    let btn2 = document.createElement("button");
    li.appendChild(btn2);
    btn2.setAttribute("id", "delete");
    btn2.innerText = "delete";
    btn2.addEventListener("click", Delete);

    // after performing all tasks remove this will remove input value

    let emptyStr = "";
    inputValue = emptyStr;
  }
};

// this function delete all list item in ul element

const clearTodoList = () => {
  if (confirm("Do you really wants to clear the list?")) {
    let emptyStr = "";
    output.innerHTML = emptyStr;
  }
};

// this function delete a particular list element which you wants to delete

const Delete = (e) => {
  let item = e.target;
  let todo = item.parentElement;
  todo.remove(item);
};

// this function marks the list item as completed

const complete = (e) => {
  let item = e.target;
  let todo = item.parentElement;
  todo.classList.toggle("finish");
};

// add event listeners
add.addEventListener("click", addTodo);
clear.addEventListener("click", clearTodoList);
