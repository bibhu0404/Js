let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

function addToDo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value.trim();
    let todoDate = dateElement.value;

    if (todoItem && todoDate) {
        todoList.push({ item: todoItem, date: todoDate });
        localStorage.setItem('todoList', JSON.stringify(todoList));
        inputElement.value = '';
        dateElement.value = '';
        displayItems();
    }
}

function displayItems() {
    let displayElement = document.querySelector('#todo-items');
    displayElement.innerHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        let todo = todoList[i];

        let itemDiv = document.createElement('div');
        itemDiv.className = 'todo-item';

        let itemText = document.createElement('span');
        itemText.textContent = todo.item + ' (Due: ' + todo.date + ')';

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = (function(index) {
            return function() {
                deleteItem(index);
            };
        })(i);

        itemDiv.appendChild(itemText);
        itemDiv.appendChild(deleteButton);
        displayElement.appendChild(itemDiv);
    }
}

function deleteItem(index) {
    todoList.splice(index, 1);
    localStorage.setItem('todoList', JSON.stringify(todoList));
    displayItems();
}

document.addEventListener('DOMContentLoaded', displayItems);
