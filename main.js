let taskDOM = document.querySelector("#task")
let listDOM = document.querySelector("#list")


function sorgu(){
    let kontrolDOM = document.querySelector("#task");
    if(kontrolDOM.value.trim() === "" ) { 
        kontrolDOM.innerText = "Bugün ne yapacaksın?"
        bosGecemezsinToast()
    } else {
        newElement()
        addItem(element)
    }
}

const addItem = (element) => {
    let liDOM = document.createElement('li')
    liDOM.setAttribute("onclick", "toggleComplete(this)");
    liDOM.innerHTML = ` 
    ${element}<button type="delete-btn" class="ml-3 mb-3 mt-3 close" data-dismiss="toast" aria-label="Close" onclick="removeItem(this)">
          <span aria-hidden="true">&times;</span>
        </button>
    `
    listDOM.append(liDOM)
}

function eklendiToast(){
    var toast = document.querySelector('#liveToast');
    toast.classList.remove('hide');
    toast.classList.add('show');
    $(toast).toast('show');
}
function bosGecemezsinToast(){
    var toast = document.querySelector('#LiveToastBos');
    toast.classList.remove('hide');
    toast.classList.add('show');
    $(toast).toast('show');
}
function newElement(event){
    eklendiToast()
    addItem(taskDOM.value)
    taskDOM.value = '';
    document.querySelector("#task").innerText = "Bugün ne yapacaksın?";
}

function removeItem(element) {
    const listItem = element.parentElement;
    listItem.remove();
}

function toggleComplete(element) {
    element.classList.toggle("completed");
    element.classList.toggle("checked");
}
