// Title: L0 - Managing a To-Do List: Adding and Removing Tasks

// Problem Statement: Create an array that represents your daily to-do list with 5 tasks. Add a new task to the beginning of the list. Then, remove the last task from the list. Finally, log the updated to-do list to the console.


let todoList = ["Exercise", "Read a book", "Complete project", "Buy groceries", "Call a friend"];

todoList.unshift("Meditate");

todoList.pop();

console.log("Updated To-Do List:", todoList);
