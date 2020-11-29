/*
$addBtn.onclick = function (evt) {
    evt.preventDefault();
    let newTask = document.createElement('li');
    newTask.textContent = $inputField.value;
    $inputField.value = '';
    $list.append(newTask);
  };


  function table() {
        let $table = document.querySelector(".table");
        $table.innerHTML = "";
        for (let el of _data) {
          $table.innerHTML += `<tr>
            <td>${el.firstName}</td>
            <td>${el.lastName}</td> 
            <td>${el.age}</td>
            </tr>`;
        }
      }

      
let tasks = {
    cur: [],
    done: [],
    removed: []
};

document.querySelector('.add').addEventListener('click', function(e){
	e.preventDefault();
  let field = document.querySelectorAll('.create-task-field');
  field = [...field];
  let nTask = field.reduce((_nTask, item) => {
  	_nTask[item.name] = item.value
    return _nTask;
  }, {})
  tasks.cur.push(nTask)
  console.log(tasks)
})
*/
let actualTasks = [];
let doneTasks = [];
let removedTasks = [];

let $inputfield = document.querySelector('.form-control');
let $addBtn = document.querySelector('.btn-outline-secondary');
let $list = document.querySelector('.act_tasks');



$addBtn.addEventListener('click', function() {
    actualTasks.push($inputfield.value);
    $inputfield.value = "";
    console.log(actualTasks)
    showList();
})


function showList () {
    $list.innerHTML = "";
    actualTasks.forEach(function(n, i){
         $list.innerHTML += "<li>"+ n +"<a onclick = 'doneTask("+ i +")'> &check; </a><a onclick = 'removeTask("+ i +")'>&cross;</a></li>"       
    })
}

function removeTask (i) {
    console.log(0)
}
function doneTask (i) {
  console.log(1)
}



/*
let tasks = {
  cur: [],
  done: [],
  removed: []
};

$addBtn.addEventListener('click', function(e) {
  e.preventDefault();
  $inputfield = [...$inputfield];
  let nTask = $inputfield.reduce((_nTask, item) => {
  	_nTask[item.name] = item.value
    return _nTask;
  }, {})
  tasks.cur.push(nTask)
  console.log(tasks)
  showList();
})

let showList = () => {
  $list.innerHTML = "";
  for (let el of tasks.cur) {
    $list.innerHTML += "<li>" + el +"<a onclick = 'doneTask("+ el +")'> &check; </a><a onclick = 'removeTask("+ el +")'>&cross;</a></li>"
  }
}
*/