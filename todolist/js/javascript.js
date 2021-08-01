let ulDOM = document.querySelector('#list');
ulDOM.innerHTML = localStorage.getItem('list') ? localStorage.getItem('list') : ulDOM.innerHTML;
let inputDOM = document.querySelector('#task');
const closebtns = document.getElementsByClassName("close");
const list = document.querySelector("#list");
const liveToastError = document.querySelector('#liveToastError');
const liveToastSucces = document.querySelector('#liveToastSucces');
const toastCloseButtons = document.querySelector('button.close');

function closeFunction() {
  liveToastSucces.classList.replace("show" , "hide");
  liveToastError.classList.replace("show" , "hide");
}



for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
   this.parentElement.style.display = "none";
   localStorage.removeItem('list');
   localStorage.setItem('list',ulDOM.innerHTML);
 });
}


list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

function newElement() {
   if (!inputDOM.value) {
     liveToastError.classList.replace("hide" , "show");
     return 0;
   }
   else {
     liveToastSucces.classList.replace("hide", "show");
   }
    liDOM = document.createElement('li');
    liDOM.innerHTML = `${inputDOM.value} <span class="close">X</span>`
    ulDOM.appendChild(liDOM);
    localStorage.setItem('list',ulDOM.innerHTML);
    for (i = 0; i < closebtns.length; i++) {
      closebtns[i].addEventListener("click", function() {
       this.parentElement.style.display = "none";
       localStorage.removeItem('list');
       localStorage.setItem('list',ulDOM.innerHTML);
     });
    }
}





