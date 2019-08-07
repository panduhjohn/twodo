let todos = [
  [`Be able to mark todos "done".`, false],
  [`Allow user interaction through the DOM`, false],
  [`Add dates to todos.`, false]
];
printAllTodos();

// ## Tasks

// 1. Write a function to print a given todo to the dom.You've done this before!
function printTodo(name) {
  const li = document.createElement("li"); //<li>Creates empty LI</li>
  li.innerText = name; // <li>innerText is what is NOW in the LI</li>
  const toDoList = document.querySelector(`.todo-list`);
  toDoList.appendChild(li); //"appendChild" adds to the bottom of the list... "insertBefore" adds to the top of the list
}

// 1. Write a function to print every todo individually, using the function you just made.Now, you'll want to pass the todo's * name *.If you're using sub-arrays, that means you'll have to pass in not the`todo`, but the todo's name value, which should be its first (0th) index. Be careful!
function printAllTodos() {
  for (let i = 0; i < todos.length; i++) {
    printTodo(todos[i][0]);
  }
}

// 1. Now that you've written them, call your list-printing function, maybe up there right after your arrays. If you did it right, on load your page should list the todos we started with!
//DONE

// 1. Write a little helper function that adds a todo to your array(s). push in a sub - array.
function createTodo(name) {
  // console.log(name + "  use me");
  todos.push([name, false]);
}

// 1. Write the equivalent helper function to * remove * one item from the array(s).
function removeTodo(i) {
  if (Number(i)) {
    let removed = todos.splice(i, 1);
  }
}

// 1. Now let's write a function to add to our list, complete with an event listener to run it when our add function is run. Grab the user's input and add it to your data and to the dom!
function addToList() {
  let inputBox = document.querySelector(".todo-input");
  let addButton = document.querySelector(".add-todo");
  addButton.onclick = function() {
    createTodo(inputBox.value);
    printTodo(inputBox.value);
  };
}
addToList();

// 1. Let's write some new helper functions for our mark complete feature. The first takes in a number and marks the matching todo complete in our data.

// 1. Now write a helper function that, given a number, marks the equivalent`li` complete.I recommend a line through the text, but apply any other or additional css you want.There area few ways to use the number you're given to find the `li` you want to mark; I recommend an `nth-child()` selector.

// 1. Given those helper functions(and try using them in the console to see if they work!), let's write our user-facing function for marking complete. It should run whenever the user hits the MARK COMPLETE function (so... an event listener!), and the function should grab the user's input and pass it to your two helper functions.Don't forget to adjust for index vs number, as our data is 0-based, but we should no longer expect our users to think that way!

// 1. Last major part: deleting * all todos * that are marked complete.But first, let's write a helper function to delete all `li`s from the DOM.

// 1. Now the function: it should run every time the DELETE COMPLETED button is pushed, and it should go through and find those marked completed and delete them from the array(don't worry about the dom yet!). You can build a new set of data that doesn't have the completed ones, or splice the current set of data, but both are tricky! When your data is only incomplete todos, run your dom - list - clearing function and your list - printing function, and this big ol' function is all done!

// 1. As are you!
