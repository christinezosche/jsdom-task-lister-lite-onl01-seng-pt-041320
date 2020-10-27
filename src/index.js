document.addEventListener("DOMContentLoaded", () => {
  const tasks = document.getElementById('tasks');
  const form1 = document.getElementById('create-task-form');
  const form2 = document.getElementById('delete-task-form');
  
  
  form1.addEventListener('submit', function(event) {
    let li = document.createElement('li');
    let data = document.getElementById('new-task-description').value
    let node = document.createTextNode(data)
    li.appendChild(node)
    tasks.appendChild(li)
    event.preventDefault();
  });

  form2.addEventListener('submit', function(event) {
    tasks.querySelectorAll("li").remove();
    event.preventDefault();
  });

});

