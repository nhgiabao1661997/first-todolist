let btnAddTaskEl = document.querySelector('button')// khai báo nhấn nút

let taskNameEl = document.querySelector('#content')// khai báo content

let tasks = getTaskFromLocalStorage(); // lưu trữ
renderTask(tasks)

btnAddTaskEl.addEventListener('click', function(){// bắt sự kiện
    if (!taskNameEl.value) {// thông báo nếu rỗng 
        alert('vui long nhập gì đó vào');
        return false// trả về và dừng 
    }

    let taskId =this.getAttribute('id');
// lưu trữ
    let tasks = getTaskFromLocalStorage()
    let task ={name :taskNameEl.value}
    if(taskId ==0 ||taskId ){
        tasks[taskId]=task;
        this.removeAttribute('id');
    }else{
    tasks.push(task)// lấy giá trị nhập vào
       

    }
    taskNameEl.value = '' // trả ra giá trị

    localStorage.setItem('tasks',JSON.stringify(tasks)) // lưu vào local storerage

    renderTask(tasks)
})
// Edit task

function editTask (id) {
    let tasks = getTaskFromLocalStorage()
    if(tasks.length >0){
    taskNameEl.value=tasks[id].name
    btnAddTaskEl.setAttribute('id',id )
    }

}
// xóa task

function delTask (id) {
    if(confirm('bạn có muốn xóa không')){
        let tasks =getTaskFromLocalStorage()//lấy dữ liệu ra
        tasks.splice(id,1)// del 1 item
        localStorage.setItem('tasks', JSON.stringify(tasks));// set lại localstorage
        renderTask(tasks) // render lại tasks
    }

}

function renderTask(tasks = [])//ban đầu rỗng
 {
    let content = '<ul>'
    tasks.map((task,index) => {
        content += `
        <li>
        <div class="task-name">${index} </div>
        <div class="task-name">${task.name} </div>

        <a  href="#" onclick="editTask(${index})">Edit</a>
        <a href="#" onclick="delTask(${index})" comfirm="">Delete</a>
        </li>
        `
    })
    content += '<ul>'
    document.querySelector('#result').innerHTML= content
}
// Lấy task từ Local 
 function getTaskFromLocalStorage  () {
   return localStorage.getItem('tasks') ? JSON.parse( localStorage.getItem('tasks')):[]
 }

