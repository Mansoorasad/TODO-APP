var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
  
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("addTask").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Please write something!");
  } else {
    document.getElementById("myList").appendChild(li);
  }
  document.getElementById("addTask").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}






// function get_todos() {
//     var todos = new Array;
//     var todos_str = localStorage.getItem('todo');
//     if (todos_str !== null) {
//         todos = JSON.parse(todos_str); 
//     }
//     return todos;
// }
 
// function add() {
//     var task = document.getElementById('task').value;
 
//     var todos = get_todos();
//     todos.push(task);
//     localStorage.setItem('todo', JSON.stringify(todos));
 
//     show();
 
//     return false;
// }
 
// function remove() {
//     var id = this.getAttribute('id');
//     var todos = get_todos();
//     todos.splice(id, 1);
//     localStorage.setItem('todo', JSON.stringify(todos));
 
//     show();
 
//     return false;
// }
 
// function show() {
//     var todos = get_todos();
 
//     var html = '<ul>';
//     for(var i=0; i<todos.length; i++) {
//         html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>';
//     };
//     html += '</ul>';
 
//     document.getElementById('todos').innerHTML = html;
 
//     var buttons = document.getElementsByClassName('remove');
//     for (var i=0; i < buttons.length; i++) {
//         buttons[i].addEventListener('click', remove);
//     };
// }
 
// document.getElementById('add').addEventListener('click', add);
// show();
